const mongoose = require('mongoose');
const generatePassword = require('../helpers/generatePassword');

mongoose.connect('mongodb://localhost/todo-fancy');

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
    type: String,
    required: [true, 'Password field cannot be empty']
  },
  bio: String
}, {
  timestamps: true
});

userSchema.pre('save', function (next) {
  this.email = this.email.toLowerCase();
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