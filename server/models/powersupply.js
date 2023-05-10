// models/Powersupply.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const powersupplySchema = new Schema({
  pname: { type: String, required: true, unique: true },
  base: { type: String, required: true },
  price: { type: String, required: true },
  where: { type: String, required: true},
  imageURL: { type: String, required: true },
  siteURL: { type: String, required: true, unique: true },
  at1: { type: String, required: true },
  at2: { type: String, required: true },
  at3: { type: String, required: true },
  at4: { type: String, required: true },
  
});

module.exports = mongoose.model('Powersupply', powersupplySchema);
