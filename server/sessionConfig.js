var session = require('express-session');
const { v4: uuidv4 } = require('uuid');

var farFuture = new Date(new Date().getTime() + (1000*60*60*24*365*10));

const mySession = session({
  secret: "Shh, its a secret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: farFuture,
    SameSite: 'Strict'
  }
});

const addSession = (req, res, next) => {
  if (!req.session.user_id) {
    req.session.user_id = uuidv4();
    req.session.yourOutfits = [];
  }
  next();
};

module.exports = { mySession, addSession };