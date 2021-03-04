const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const config = require('../config.js');
const sessionConfig = require('./sessionConfig.js');
const db = require('./db.js');

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

app.get('/getYourOutfits', (req, res) => {
  var yourOutfits = req.session.yourOutfits;
  console.log('yourOutfits:', yourOutfits);
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
  // console.log('from the client:', req.body.data);
  var yourOutfitsUpdated = req.session.yourOutfits;
  // console.log('yourOutfitsUpdated:', yourOutfitsUpdated);
  yourOutfitsUpdated.unshift(req.body.data);
  // console.log('yourOutfitsUpdated after unshift:', yourOutfitsUpdated);
  req.session.yourOutfits = yourOutfitsUpdated;
  // console.log('updated session:', req.session);
  res.sendStatus(200);
  // db.insertOutfit(req.body.data, req.session.user_id, (err, data) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     console.log('data from db:', data);
  //     res.sendStatus(200);
  //   }
  // });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});