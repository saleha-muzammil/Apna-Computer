// models/memory.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const memorySchema = new Schema({
  pname: { type: String, required: true, unique: true },
  base: { type: Number, required: true },
  price: { type: Number, required: true, unique: true },
  where: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true, unique: true },
  siteURL: { type: String, required: true, unique: true },
  speed: { type: String, required: true, unique: true },
  modules: { type: String, required: true, unique: true },
  wordlatency: { type: String, required: true, unique: true },
  cas: { type: Number, required: true, unique: true }
  
});

module.exports = mongoose.model('Memory', memorySchema);
