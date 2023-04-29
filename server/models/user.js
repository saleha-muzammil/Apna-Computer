// models/user.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);

