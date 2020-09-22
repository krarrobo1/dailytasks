const { create, getAll, getById, update, destroy } = require('../services/task.service');

async function createTask(req, res, next) {
    try {
        const { body } = req;
        const response = await create(body);
        return res.json(response);
    } catch (error) {
        next(error);
    }
}

async function getAllTasks(req, res, next) {
    try {
        const { userId } = req.query;
        const response = await getAll(userId);
        return res.json(response);
    } catch (error) {
        next(error);
    }
}

async function getTaskById(req, res, next) {
    try {
        const { id } = req.params;
        const response = await getById(id);
        return res.json(response);
    } catch (error) {
        next(error);
    }
}

async function updateTask(req, res, next) {
    try {
        const { id } = req.params;
        const { body } = req;
        const response = await update(id, body);
        return res.json(response);
    } catch (error) {
        next(error);
    }
}

async function destroyTask(req, res, next) {
    try {
        const { id } = req.params;
        await destroy(id);
        return res.json({ message: 'Task destroyed successfull...' })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createTask,
    getTaskById,
    getAllTasks,
    updateTask,
    destroyTask
}