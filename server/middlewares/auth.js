const jwt = require('jsonwebtoken');

function Auth(req, res, next) {
    jwt.verify(req.headers.token, 'HAHAHA', function (err, payload) {
        if (payload == undefined) {
            res.status(200).json({
                message: 'Token wrong'
            });
        } else {
            req.headers.name = payload.name;
            req.headers.email = payload.email;
            next();
        }
    });
}

module.exports = Auth;