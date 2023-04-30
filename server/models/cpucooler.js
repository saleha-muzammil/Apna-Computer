// models/cpucooler.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const cpucoolerSchema = new Schema({
  pname: { type: String, required: true, unique: true },
  base: { type: Number, required: true },
  price: { type: Number, required: true, unique: true },
  where: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true, unique: true },
  siteURL: { type: String, required: true, unique: true },
  noiselevel: { type: String, required: true, unique: true },
  fanrpm: { type: String, required: true, unique: true },
  rotator: { type: String, required: true, unique: true },
  color: { type: Number, required: true, unique: true }
  
});

module.exports = mongoose.model('Cpucooler', cpucoolerSchema);
