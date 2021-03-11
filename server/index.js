const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const config = require('../config.js');
const sessionConfig = require('./sessionConfig.js');
const morgan = require('morgan');

const PORT = 3000;
const app = express();
const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(morgan('dev'));
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

app.get('/getYourOutfits', (req, res) => {
  var yourOutfits = req.session.yourOutfits;
  res.send(yourOutfits);
})

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

app.put('/addToYourOutfit', (req, res) => {
  var yourOutfitsUpdated = req.session.yourOutfits;
  yourOutfitsUpdated.unshift(req.body.data);
  req.session.yourOutfits = yourOutfitsUpdated;
  res.sendStatus(200);
});

app.put('/deleteFromYourOutfit', (req, res) => {
  var yourOutfitsUpdated = req.session.yourOutfits;
  var index = yourOutfitsUpdated.indexOf(req.body.data);
  yourOutfitsUpdated.splice(index, 1);
  req.session.yourOutfits = yourOutfitsUpdated;
  res.sendStatus(200);
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


///https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=19378