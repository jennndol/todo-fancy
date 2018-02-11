const jwt = require('jsonwebtoken');

function Auth(req, res, next) {
    jwt.verify(req.headers.token, process.env.JWT_TOKEN_SECRET, function (err, payload) {
        if (payload == undefined) {
            res.status(500).json({
                message: 'Token wrong'
            });
        } else {
            next();
        }
    });
}

module.exports = Auth;