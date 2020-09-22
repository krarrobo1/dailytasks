const TaskModel = require('../models/task.model');

async function create(task) {
    const createdTask = await TaskModel.create(task);
    return createdTask;
}

async function getAll(userId) {
    if (!userId) {
        const error = new Error();
        error.message = 'Se debe especificar el Id del usuario';
        error.status = 400;
        throw error;
    }
    const tasks = await TaskModel.find({
        owner: userId
    }).exec();
    return tasks
}

async function getById(id) {
    if (!id) {
        const error = new Error();
        error.message = 'Se debe especificar el Id de la tarea';
        error.status = 400;
        throw error;
    }
    const task = await TaskModel.findById(id).exec();
    return task;
}

async function update(id, updatedTask) {
    if (!id) {
        const error = new Error();
        error.message = 'Se debe especificar el Id de la tarea';
        error.status = 400;
        throw error;
    }
    const updated = await TaskModel.findByIdAndUpdate(id, updatedTask, { new: true }).exec();
    return updated;
}

async function destroy(id) {
    if (!id) {
        const error = new Error();
        error.message = 'Se debe especificar el Id de la tarea';
        error.status = 400;
        throw error;
    }
    const result = await TaskModel.findByIdAndDelete(id).exec();
    return result;
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    destroy
}