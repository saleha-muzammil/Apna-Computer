// models/cpu.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const cpuSchema = new Schema({
  pname: { type: String, required: true, unique: true },
  base: { type: Number, required: true },
  price: { type: Number, required: true, unique: true },
  where: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true, unique: true },
  siteURL: { type: String, required: true, unique: true },
  cores: { type: Number, required: true, unique: true },
  tdp: { type: String, required: true, unique: true },
  coreclock: { type: String, required: true, unique: true },
  graphic: { type: String, required: true, unique: true },
  
});

module.exports = mongoose.model('Cpu', cpuSchema);
