const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer(); // { dest: '...'} omitted -> in-memory only

const port = 3000;

const app = express();

app.use(express.static('client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const flatten = function (obj) {
  const result = [];
  
  const traverse = function (obj) {
    result.push(obj);
    obj.children.forEach(c => {
      traverse(c);
    })
  }

  traverse(obj);
  return result;
};


const template = function(csv) {
  return `
    <form method="post">
      <label for="jsonString">Enter JSON string:</label>
      <div><textarea id="jsonString" name="jsonString"></textarea></div>
      <input type="submit">
    </form>
    <pre>${csv}</pre>
  `;
};


//app.post('/', (req, res) => {
app.post('/', upload.single('jsonString'), (req, res) => {
  //const input = flatten(JSON.parse(req.body.jsonString));
  const input = flatten(JSON.parse(req.file.buffer.toString()));

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

  res.send(template(csv));
});


app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});


// app.get('/', (req, res) => {
//   //res.sendFile(path.join(__dirname, 'client/index.html'));
// });