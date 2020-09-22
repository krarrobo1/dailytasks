const { Router } = require('express');
const router = Router();
const { getAllTasks, getTaskById, createTask, updateTask, destroyTask } = require('../controllers/task.controller');

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', destroyTask);

module.exports = router;