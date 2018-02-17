const bcrypt = require('bcrypt');
const saltRounds = 10;

const generatePassword = (myPlaintextPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(myPlaintextPassword, saltRounds)
      .then(hash => {
        resolve(hash)
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = generatePassword;