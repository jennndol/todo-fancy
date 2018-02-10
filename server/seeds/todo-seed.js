const Todo = require('../models/Todo');

const coding = new Todo({
    task: 'coding',
    isCompleted: false,
    user: '5a7ec8077723941666acdbe3'
});

coding.save()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    });