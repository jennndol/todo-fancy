const User = require('../models/User');
const decode = require('../helpers/decode');
class UserController {

  static getAll(req, res) {
    User.find()
      .then(docs => {
        res.status(200).json({
          message: 'Get users success',
          docs: docs
        });
      })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }

  static detail(req, res) {
    User.findById(req.params.id)
      .then(doc => {
        res.status(200).json({
          message: 'Get user success',
          doc: doc
        })
      })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }

  static update(req, res) {
    decode(req.headers.token)
      .then(payload => {
        User.findById(payload._id)
          .then(user => {
            user.name = req.body.name || user.name;
            user.bio = req.body.bio || user.bio;
            user.save()
              .then(doc => {
                res.status(200).json({
                  message: 'Update success',
                });
              })
              .catch(error => {
                res.status(500).json({
                  message: error.message
                });
              });
          })
      })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }

}

module.exports = UserController;