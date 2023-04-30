// models/storage.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const storageSchema = new Schema({
  pname: { type: String, required: true, unique: true },
  base: { type: Number, required: true },
  price: { type: Number, required: true, unique: true },
  where: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true, unique: true },
  siteURL: { type: String, required: true, unique: true },
  type: { type: String, required: true, unique: true },
  capacity: { type: String, required: true, unique: true },
  cache: { type: String, required: true, unique: true },
  form: { type: String, required: true, unique: true }
  
});

module.exports = mongoose.model('Storage', storageSchema);
