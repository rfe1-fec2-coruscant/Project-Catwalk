// var cookieParser = require('cookie-parser');
var session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const db = require('./db.js');

// app.use(cookieParser());
var farFuture = new Date(new Date().getTime() + (1000*60*60*24*365*10));
const mySession = session({
  secret: "Shh, its a secret!",
  resave: false,
  saveUninitialized: true,
  cookie: { expires: farFuture }
});

const addSession = (req, res, next) => {
  if (req.session.user_id) {
    // console.log('already existant req.session.user_id:', req.session.user_id);
  } else {
    req.session.user_id = uuidv4();
    console.log('req.session', req.session);
    db.newYourOutfitsStorage(req.session.user_id);
  }
  next();
};

module.exports = { mySession, addSession };