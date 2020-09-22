const TaskModel = require('../models/task.model');

async function create(task) {
    const createdTask = await TaskModel.create(task);
    return createdTask;
}

async function getAll(userId) {
    const tasks = await TaskModel.find({
        owner: userId
    }).exec();
    return tasks
}

async function getById(id) {
    const task = await TaskModel.findById(id).exec();
    return task;
}

async function update(id, updatedTask) {
    const updated = await TaskModel.findByIdAndUpdate(id, updatedTask, { new: true }).exec();
    return updated;
}

async function destroy(id) {
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