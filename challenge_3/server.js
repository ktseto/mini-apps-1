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

app.listen(port, () => {
  console.log('Listening on port ', port);
});
