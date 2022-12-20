'use strict'
const userData = require('../data/users');

console.log({ userData });

const getAllUsers = async (req, res, next) => {
    try {
        const userslist = await userData.getAllUsers();
        res.send(userslist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await userData.getById(userId);
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUser,
}