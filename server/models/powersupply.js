// models/Powersupply.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const powersupplySchema = new Schema({
  pname: { type: String, required: true, unique: true },
  base: { type: Number, required: true },
  price: { type: Number, required: true, unique: true },
  where: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true, unique: true },
  siteURL: { type: String, required: true, unique: true },
  wattage: { type: String, required: true, unique: true },
  type: { type: String, required: true, unique: true },
  rating: { type: String, required: true, unique: true },
  modular: { type: String, required: true, unique: true }
  
});

module.exports = mongoose.model('Powersupply', powersupplySchema);
