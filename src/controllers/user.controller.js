const { create } = require('../services/user.service');

async function createUser(req, res, next) {
    try {
        const { body } = req;
        const response = await create(body);
        return res.json(response);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser
}