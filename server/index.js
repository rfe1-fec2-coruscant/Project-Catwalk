const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const PORT = 3000;
const app = express();

console.log(path.join(__dirname, '..', '/client/index.html'));
app.use(express.static(path.join(__dirname, '..', '/client/dist')));
// console.log('static path', __dirname + './client/index.html');
// app.use(express.static(__dirname + '/client/index.html'));
app.use(bodyParser.json());

app.get('/',(req, res) => {
  console.log('hi from app.get');
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
