// models/videocard.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const videocardSchema = new Schema({
  pname: { type: String, required: true, unique: true },
  base: { type: Number, required: true },
  price: { type: Number, required: true, unique: true },
  where: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true, unique: true },
  siteURL: { type: String, required: true, unique: true },
  chipset: { type: String, required: true, unique: true },
  memory: { type: String, required: true, unique: true },
  coreclock: { type: String, required: true, unique: true },
  boostclock: { type: String, required: true, unique: true }
  
});

module.exports = mongoose.model('Videocard', videocardSchema);
