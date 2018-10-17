const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const helper = require('./helper');

console.log(helper);

const upload = multer(); // { dest: '...'} omitted -> in-memory only
const app = express();
const port = 3000;

app.use(express.static('client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//app.post('/upload_json', (req, res) => {
app.post('/upload_json', upload.single('jsonString'), (req, res) => {
  //const input = helper.flatten(JSON.parse(req.body.jsonString));
  const input = helper.flatten(JSON.parse(req.file.buffer.toString()));

  const colNames = new Set();
  input.forEach(x => {
    Object.keys(x).forEach(k => {
      colNames.add(k);
    })
  })
  colNames.delete('children');

  let csv = input.map(obj => {
    return [...colNames].map(col => obj[col]).join(',');
  }).join('\n');

  csv = [...colNames].join(',') + '\n' + csv;

  fs.readdir('client/csv', (err, list) => {
    if (err) res.status(400).end();

    const index = list.length === 0 ? 1 : 1 + Math.max(...list.map(f => Number(path.basename(f, '.csv'))));
    const newFileBase = helper.padStart(String(index), '0', 5);
    fs.writeFile(`client/csv/${newFileBase}.csv`, csv, (err) => {
      if (err) res.status(400).end();
      // res.send(helper.template(csv));
      // res.send(`<pre>${csv}</pre>`);
      res.send(newFileBase);
    })
  })
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
