const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get('/login/fb', AuthController.loginFB);
router.post('/login', AuthController.login);
router.post('/register', AuthController.login);

module.exports = router;