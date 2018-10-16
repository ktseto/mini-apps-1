const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/styles/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/styles/style.css'));
});

app.get('/scripts/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/scripts/app.js'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
