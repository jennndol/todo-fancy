const jwt = require('jsonwebtoken');

function decode(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_TOKEN_SECRET, function (err, payload) {
            if (payload == undefined || err) {
                reject({ message: 'Error'});
            } else {
                resolve(payload);
            }
        });
    });
}

module.exports = decode;