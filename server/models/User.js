const mongoose = require('mongoose');
const generatePassword = require('../helpers/generatePassword');
const getLabels = require('../helpers/getLabels');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field cannot be empty']
  },
  email: {
    type: String,
    required: [true, 'Email field cannot be empty'],
    unique: true
  },
  password: {
    type: String
  },
  bio: String,
  labels: Array
}, {
  timestamps: true
});

userSchema.pre('save', function (next) {
  this.email = this.email.toLowerCase();
  this.labels = getLabels(this.bio);
  
  generatePassword(this.password)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(error => {
      console.log(error);
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;