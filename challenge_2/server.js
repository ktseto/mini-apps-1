const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

app.post('/', (req, res) => {
  // JSON to CSV logic
  // sends CSV & form
  //console.log(req.body);
  const input = req.body.jsonString;

  const colUnique = {firstName: true, lastName: true, age: true};
  const obj1 = {firstName: 'John', lastName: 'Smith'};
  const obj2 = {firstName: 'Jane', lastName: 'Doe', age: 30};
  const objList = [obj1, obj2];

  const colNames = ['firstName', 'lastName', 'age'];
  let csv = objList.map((obj) => {
    return colNames.map((col) => obj[col]).join(',');
  }).join('\n');

  csv = colNames.join(',') + '\n' + csv;
  
  const template = `
    <form method="post">
      <label for="jsonString">Enter JSON string:</label>
      <div><textarea id="jsonString" name="jsonString"></textarea></div>
      <input type="submit">
    </form>
    <p>${csv}</p>
  `;

  res.send(template);
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});


// app.get('/', (req, res) => {
//   //res.sendFile(path.join(__dirname, 'client/index.html'));
// });