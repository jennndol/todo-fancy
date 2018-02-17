const getJSON = require('get-json')

class QuoteController {
  static getQuoteOfTheDay(req, res) {
    getJSON('https://favqs.com/api/qotd', function (error, response) {
      if (error) {
        res.status(500).json({
          message: error.message
        });
      } else {
        res.status(200).json({
          response
        });
      }
    });
  }
}

module.exports = QuoteController;