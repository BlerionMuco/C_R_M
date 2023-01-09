"use strict";
const userData = require("../data/users");

const getAllUsers = async (req, res, next) => {
    try {
        const userslist = await userData.getAllUsers();
        res.send(userslist);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await userData.getById(userId);
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        console.log({ data });
        const email = data.email;
        const name = data.first_name;
        const ans = await userData.checkUser(email);
        if (ans.count > 0) {
            res.send(ans);
        } else {
            const insert = await userData.createUser(data);
            const dataReturn = { ...insert }
            res.send(dataReturn);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const data = req.body;
        const updated = await userData.updateUser(userId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const deleteUser = await userData.deleteUser(userId);
        res.send(deleteUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
