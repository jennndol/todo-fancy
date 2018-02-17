const FB = require('fb');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

class UserController {

    static register(req, res) {
        let obj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            bio: req.body.bio
        };

        User.create(obj)
            .then(doc => {
                res.status(200).json({
                    message: 'User created',
                    doc: doc
                });
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });
    }

    static login(req, res) {
        User.findOne({
                email: req.body.email
            })
            .then(user => {
                if (user != null) {
                    comparePassword(req.body.password, user.password)
                        .then(result => {
                            if (result) {
                                let token = jwt.sign({
                                    _id: user._id,
                                    name: user.name,
                                    email: user.email
                                }, process.env.JWT_TOKEN_SECRET);

                                res.status(200).json({
                                    message: 'Successfully login',
                                    token: token,
                                    owner: {
                                        _id: user._id,
                                        name: user.name,
                                        email: user.email
                                    }
                                });
                            } else {
                                res.status(401).json({
                                    message: 'Email or password you entered wrong!'
                                });
                            }
                        })
                        .catch(error => {
                            res.status(500).json({
                                message: message.error
                            });
                        });
                } else {
                    res.status(401).json({
                        message: 'Email or password you entered wrong!'
                    });
                }
            })
            .catch(error => {
                res.status(500).json({
                    message: error.message
                });
            });
    }

    static loginFB(req, res) {
        FB.setAccessToken(req.headers.token);
        FB.api('/me', {
                fields: 'name, email'
            })
            .then(doc => {
                User.findOne({
                        email: doc.email
                    })
                    .then(user => {
                        if (user) {
                            let token = jwt.sign({
                                _id: user._id,
                                name: user.name,
                                email: user.email
                            }, process.env.JWT_TOKEN_SECRET);
                            res.status(200).json({
                                message: 'Successfully login',
                                token: token,
                                user: {
                                    _id: user._id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        } else {
                            let obj = {
                                name: doc.name,
                                email: doc.email,
                                password: doc.email
                            }
                            User.create(obj)
                                .then(user => {
                                    let token = jwt.sign({
                                        _id: user._id,
                                        name: user.name,
                                        email: user.email
                                    }, process.env.JWT_TOKEN_SECRET);
                                    res.status(200).json({
                                        message: 'Successfully login',
                                        token: token,
                                        user: {
                                            _id: user._id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                })
                                .catch(error => {
                                    res.status(500).json({
                                        message: error.message
                                    });
                                });
                        }
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

module.exports = UserController;