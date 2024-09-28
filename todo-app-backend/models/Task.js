const db = require('./db'); // Import the database connection

const Task = {
    findAll: (callback) => {
        const query = 'SELECT * FROM tasks';
        db.query(query, callback);
    },

    create: (task, callback) => {
        const query = 'INSERT INTO tasks (name, status, deadline, priority, comments) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [task.name, task.status, task.deadline, task.priority, task.comments], callback);
    },

    update: (id, task, callback) => {
        const query = 'UPDATE tasks SET name = ?, status = ?, deadline = ?, priority = ?, comments = ? WHERE id = ?';
        db.query(query, [task.name, task.status, task.deadline, task.priority, task.comments, id], callback);
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM tasks WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Task;
