// models/peripherals.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const peripheralsSchema = new Schema({
  pname: { type: String, required: true, unique: true },
  base: { type: Number, required: true },
  price: { type: Number, required: true, unique: true },
  where: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true, unique: true },
  siteURL: { type: String, required: true, unique: true },
  type: { type: String, required: true, unique: true },
  style: { type: String, required: true, unique: true },
  color: { type: String, required: true, unique: true },
  wireless: { type: String, required: true, unique: true }
  
});

module.exports = mongoose.model('Peripherals', peripheralsSchema);
