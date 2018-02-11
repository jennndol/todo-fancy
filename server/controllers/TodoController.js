const Todo = require('../models/Todo');
const decode = require('../helpers/decode');

class TodoController {
    static getAll(req, res) {
        decode(req.headers.token)
            .then(payload => {
                Todo.find({
                        userId: payload._id
                    })
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
            })
            .catch(error => {
                res.status(500).json(error.message);
            });
    }

    static add(req, res) {
        decode(req.headers.token)
            .then(payload => {
                Todo.create({
                        task: req.body.task,
                        isCompleted: false,
                        userId: payload._id
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
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });
    }

    static detail(req, res) {
        decode(req.headers.token)
            .then(payload => {
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
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });
    }

    static update(req, res) {
        decode(req.headers.token)
            .then(payload => {
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

    static setStatus(req, res) {
        decode(req.headers.token)
            .then(payload => {
                Todo.findById(req.params.id)
                    .then(doc => {
                        if (doc.isCompleted == false) {
                            doc.isCompleted = true;
                        } else {
                            doc.isCompleted = false;
                        }
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
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });

    }

}

module.exports = TodoController;