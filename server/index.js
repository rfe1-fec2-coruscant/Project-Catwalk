const express = require('express');
const bodyParser = require('body-parser')

const PORT = 3000;
const app = express();

app.use(express.static(__dirname + '/client/index.html'));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
