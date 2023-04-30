// models/motherboard.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const motherboardSchema = new Schema({
  pname: { type: String, required: true, unique: true },
  base: { type: Number, required: true },
  price: { type: Number, required: true, unique: true },
  where: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true, unique: true },
  siteURL: { type: String, required: true, unique: true },
  socket: { type: String, required: true, unique: true },
  memorymax: { type: String, required: true, unique: true },
  form: { type: String, required: true, unique: true },
  slots: { type: Number, required: true, unique: true }
  
});

module.exports = mongoose.model('Motherboard', motherboardSchema);
