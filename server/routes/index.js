const express = require('express');
const router = express.Router();
const QuoteController = require('../controllers/QuoteController');

router.get('/', function(req, res, next) {
  res.status(200).json({message:'Hello world'});
});

router.get('/quote', QuoteController.getQuoteOfTheDay);

module.exports = router;
