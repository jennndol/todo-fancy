const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.getAll);
router.get('/:id', UserController.detail);
router.put('/', UserController.update);

module.exports = router;