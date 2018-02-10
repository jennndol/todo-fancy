const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-fancy');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    bio: String,
  });

const User = mongoose.model('User', userSchema);

module.exports = User;