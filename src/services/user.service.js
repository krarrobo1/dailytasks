const UserModel = require('../models/user.model');

async function create(user) {
    const createdUser = await UserModel.create(user);
    return createdUser;
}

module.exports = {
    create
}