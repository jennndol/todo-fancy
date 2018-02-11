const jwt = require('jsonwebtoken');

function decode(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'HAHAHA', function (err, payload) {
            if (payload == undefined) {
                reject({ message: 'Error'});
            } else {
                resolve(payload);
            }
        });
    });
}

module.exports = decode;