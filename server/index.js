const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const config = require('../config.js');
// var cookieParser = require('cookie-parser');
var session = require('express-session');

const PORT = 3000;
const app = express();

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(bodyParser.json());
// app.use(cookieParser());
var farFuture = new Date(new Date().getTime() + (1000*60*60*24*365*10));
app.use(session({
  secret: "Shh, its a secret!",
  resave: false,
  saveUninitialized: true,
  cookie: { expires: farFuture }
}));

app.get('/', (req, res) => {
  console.log('hi from app.get');
  res.end();
});

app.get('/get', (req, res) => {
  var endPoint = req.query.path;
  if (req.session.user_id) {
    console.log('already existant req.session');
  } else {
    req.session.user_id = 'unique new york';
    console.log('req.session:', req.session);
  }
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

// GET: /products, /reviews, /qa/questions, /qa/questions/:question_id/answers, /cart