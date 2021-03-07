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

app.put('/put', (req, res) => {
  console.log('hi from app.put');
  console.log(req.body.data);
  var endPoint = req.body.data;
  var url = api + '/' + endPoint;
  console.log(url);
  axios.put(url, {
    headers: {
      'Authorization': config.TOKEN
    }
  })
    .then(data => {
      res.end();
    })
    .catch(err => {
      res.send(err).end();
    });
});

app.post('/post', (req, res) => {
  console.log('hi from app.post');

  // console.log(req.body.data);
  // console.log(req.body.path);
  // res.end();
  var data = req.body.data;
  var endPoint = req.body.path;
  var url = api + '/' + endPoint;
  console.log(url);
  axios.post(url, data, {
    headers: {
      'Authorization': config.TOKEN
    }
  })
    .then(response => {
      console.log(response);
      res.end();
    })
    .catch(err => {
      res.send(err).end();
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

// GET: /products, /reviews, /qa/questions, /qa/questions/:question_id/answers, /cart