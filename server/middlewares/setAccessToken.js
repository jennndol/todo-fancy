const FB = require('fb');

function setAccessToken(req, res, next) {
  FB.setAccessToken(req.headers.token);
  next();
}

module.exports = setAccessToken;