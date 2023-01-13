"use strict";
const staticData = require("../data/staticData");

const getAllRoles = async (req, res, next) => {
    try {
        const rolesList = await staticData.getAllRoles();
        res.send(rolesList)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllReasons = async (req, res, next) => {
    try {
        const reasonsList = await staticData.getAllReasons();
        res.send(reasonsList)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllRoles,
    getAllReasons
};