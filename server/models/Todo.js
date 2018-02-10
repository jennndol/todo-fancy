const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-fancy');

const todoSchema = mongoose.Schema({
    task: String,
    isCompleted: Boolean,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;