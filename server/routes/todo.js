const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router.get('/', TodoController.getAll);
router.post('/', TodoController.add);
router.get('/:id', TodoController.detail);
router.get('/:id/set-status', TodoController.setStatus);
router.put('/:id', TodoController.update);
router.delete('/:id', TodoController.remove);

module.exports = router;