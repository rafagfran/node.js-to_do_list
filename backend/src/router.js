const express = require('express');
const router = express.Router();

const tasksController = require('./controllers/tasksController.js');
const taskMiddleware = require('./middlewares/tasksMiddleware.js');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddleware.validateBody,tasksController.createTask);
router.delete('/tasks/:id',tasksController.deleteTask);
router.put('/tasks/:id',taskMiddleware.validateStatus,taskMiddleware.validateBody,tasksController.updateTask);

module.exports = router;