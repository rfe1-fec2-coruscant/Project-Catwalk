const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const config = require('../config.js');
const sessionConfig = require('./sessionConfig.js');

const PORT = 3000;
const app = express();
const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(bodyParser.json());
app.use(sessionConfig.mySession);
app.use(sessionConfig.addSession);

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

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});