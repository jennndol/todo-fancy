const User = require('../models/User');
const decode = require('../helpers/decode');
const getLabels = require('../helpers/getLabels');
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
        let labels = getLabels(doc.bio);
        console.log(labels);

        res.status(200).json({
          message: 'Get user success',
          doc: doc,
          labels: labels
        })
      })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }

  static update(req, res) {
    User.findById(req.decoded._id)
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

  }

}

module.exports = UserController;