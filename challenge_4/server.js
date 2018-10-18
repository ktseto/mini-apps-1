const express = require('express');
const port = 3000;

const app = express();

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});