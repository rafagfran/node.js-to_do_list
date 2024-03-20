const connection = require('./connection.js');

 const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks;'); 
    console.log(tasks);
    return tasks;
};

const createTask = async (task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const [createdTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', dateUTC]);
    return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
    const deletedTask = await connection.execute('DELETE FROM tasks WHERE id=?', [id]);
    return deletedTask;
};

const updateTask = async (id, task) => {
    const { title, status } = task;

    const updatedTask = await connection.execute( 'UPDATE tasks SET title = ?, status = ? WHERE id=? ', [title, status, id]);
    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};