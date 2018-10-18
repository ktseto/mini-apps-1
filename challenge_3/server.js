const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const port = 3000;

const app = express();
app.use(express.static('public'));
app.use(express.static('compiled'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/checkout', (req, res) => {
  console.log('checkout:',req.body);
  db.queryAsync(`
    INSERT INTO checkout (account_id, contact_id, billing_id, purchased)
    VALUES (null, null, null, null)
  `,
    (err, okpacket) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send(String(okpacket.insertId));
      }
    }
  );
});

app.post('/account', (req, res) => {
  db.queryAsync(`
    INSERT INTO account (name, email, password)
    VALUES ("${req.body.name}", "${req.body.email}", "${req.body.password}")
  `,
    (err, okpacket) => {
      if (err) {
        console.log(err);
      } else {
        console.log('account', okpacket.insertId);
        console.log('account:',req.body);
        db.queryAsync(`
          UPDATE checkout SET account_id = ${okpacket.insertId}
          WHERE id = ${req.body.checkout_id}
        `,
          (err, _) => {
            if (err) {
              console.log(err);
            } else {
              res.status(201).send(String(okpacket.insertId));
            }
          }
        );
      }
    }
  );
});



app.listen(port, () => {
  console.log('Listening on port ', port);
});
