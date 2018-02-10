const Todo = require('../models/Todo');

class TodoController {
    static getAll(req, res) {
        /**
         * TODO: add user parameter into find method later
         */
        Todo.find()
            .then(docs => {
                res.status(200).json({
                    message: 'Get to do list',
                    docs: docs
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });
    }

    static add(req, res) {
        Todo.create({
                task: req.body.task,
                isCompleted: false,
                user: req.body.user
            })
            .then(doc => {
                res.status(200).json({
                    message: 'Add todo success',
                    doc: doc
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });
    }

    static detail(req, res) {
        /**
         * TODO: add user parameter into findById method later
         */
        Todo.findById(req.params.id)
            .then(doc => {
                res.status(200).json({
                    message: 'Get detail success',
                    doc: doc
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });
    }

    static update(req, res) {
        Todo.findById(req.params.id)
            .then(doc => {
                doc.task = req.body.task || doc.task;
                doc.isCompleted = req.body.isCompleted || doc.isCompleted;
                doc.save()
                    .then(doc => {
                        res.status(200).json({
                            message: 'Update success',
                            doc: doc
                        });
                    })
                    .catch(error => {
                        res.status(500).json({
                            message: error.message
                        });
                    });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });
    }

    static remove(req, res) {
        Todo.deleteOne({
                _id: req.params.id
            })
            .then(doc => {
                res.status(200).json({
                    message: 'Delete success',
                    doc: doc
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });
    }

}

module.exports = TodoController;