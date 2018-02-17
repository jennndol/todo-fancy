const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const setAccessToken = require('../middlewares/setAccessToken');

router.get('/loginfb', setAccessToken, AuthController.loginFB);
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

module.exports = router;