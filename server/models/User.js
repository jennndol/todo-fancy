const mongoose = require('mongoose');
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
  bio: String
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;