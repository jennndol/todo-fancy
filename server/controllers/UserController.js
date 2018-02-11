const FB = require('fb');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

class UserController {

    static checkUser(req, res) {
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
                            console.log(token);
                            res.status(200).json({
                                message: 'Successfully login',
                                doc: user
                            });
                        } else {
                            let obj = {
                                _id: user.id,
                                name: doc.name,
                                email: doc.email
                            }
                            User.create(obj)
                                .then(user => {
                                    let token = jwt.sign({
                                        name: user.name,
                                        email: user.email
                                    }, process.env.JWT_TOKEN_SECRET);
                                    res.status(200).json({
                                        message: 'Successfully login',
                                        doc: user
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