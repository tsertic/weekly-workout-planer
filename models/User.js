const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fitnessPoints: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const user = mongoose.model('user', userSchema);

module.exports = user;
