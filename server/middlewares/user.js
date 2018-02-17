const decode = require('../helpers/decode');

function User(req, res, next) {
  decode(req.headers.token)
    .then(payload => {
      req.decoded = payload;
      next();
    })
    .catch(error => {
      res.send(error.message);
    });
}

module.exports = User;