const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));

app.post('/', (req, res) => {
  // JSON to CSV logic
  // sends CSV & form
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});


// app.get('/', (req, res) => {
//   //res.sendFile(path.join(__dirname, 'client/index.html'));
// });