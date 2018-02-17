const bcrypt = require('bcrypt');
const saltRounds = 10;

const comparePassword = (myPlaintextPassword, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(myPlaintextPassword, hash)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = comparePassword;