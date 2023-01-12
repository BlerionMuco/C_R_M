"use strict";
const roles = require("../data/roles");

const getAllRoles = async (req, res, next) => {
    try {
        const rolesList = await roles.getAllRoles();
        res.send(rolesList)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllRoles
};