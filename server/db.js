const mongoose = require('mongoose');

const server = 'localhost';
const database = 'your_outfits';

mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true});
var outfitDatabase = mongoose.connection;

let yourOutfitsSchema = mongoose.Schema({
  _id: String,
  yourOutfits: [Number]
});

let YourOutfits = mongoose.model('Your-Outfits', yourOutfitsSchema);

var newYourOutfitsStorage = data => {
  var newStorage = new YourOutfits({
    _id: data,
    yourOutfits: []
  });
  outfitDatabase.collection('your_outfits').insertOne(newStorage);
};

module.exports.newYourOutfitsStorage = newYourOutfitsStorage;