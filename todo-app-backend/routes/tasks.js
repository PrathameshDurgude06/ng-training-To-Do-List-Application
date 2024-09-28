const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get all tasks
router.get('/', (req, res) => {
    Task.findAll((err, results) => {
        if (err) return res.status(500).json({ error: 'Error fetching tasks' });
        res.json(results);
    });
});

// Create a new task
router.post('/', (req, res) => {
    const task = req.body;
    Task.create(task, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error creating task' });
        res.status(201).json({ id: result.insertId, ...task });
    });
});

// Update an existing task
router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    Task.update(taskId, updatedTask, (err) => {
        if (err) return res.status(500).json({ error: 'Error updating task' });
        res.json({ id: taskId, ...updatedTask });
    });
});

// Delete a task
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    Task.delete(taskId, (err) => {
        if (err) return res.status(500).json({ error: 'Error deleting task' });
        res.status(204).send(); // No content
    });
});

module.exports = router;
