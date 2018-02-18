const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Task field cannot be empty']
    },
    isCompleted: Boolean,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;