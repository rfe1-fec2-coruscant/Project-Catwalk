const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const config = require('../config.js');

const PORT = 3000;
const app = express();

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('hi from app.get');
  res.end();
});

app.get('/get', (req, res) => {
  var endPoint = req.query.path;
  axios.get(api + '/' + endPoint, {
    headers: {
      'Authorization': config.TOKEN
    }
  })
    .then(data => {
      res.send(data.data).end();
    })
    .catch(err => {
      res.send(err).end();
    });
});

app.get('/get/multiple', (req, res) => {
  // make an axios get request for each endpoint
  console.log('req.query.array:', req.query.array);
  // call the API on each item of array
  res.send(['just', 'so', 'you', 'have', 'something']);
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

// GET: /products, /reviews, /qa/questions, /qa/questions/:question_id/answers, /cart