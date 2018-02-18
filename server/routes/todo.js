const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router.get('/', TodoController.getAll);
router.get('/towork', TodoController.getToWork);
router.get('/archived', TodoController.getArchived);
router.post('/', TodoController.add);
router.get('/:id', TodoController.detail);
router.put('/:id/isdone', TodoController.setStatus);
router.put('/:id', TodoController.update);
router.delete('/:id', TodoController.remove);

module.exports = router;