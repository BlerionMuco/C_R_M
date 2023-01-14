"use strict";
const absenceData = require("../data/absences");

const getUserAbsences = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const absencesList = await absenceData.getUserAbsences(userId);
        res.send(absencesList);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const createAbsence = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await absenceData.createAbsence(data);
        const dataReturn = { ...insert }
        res.send(dataReturn);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
   getUserAbsences,
   createAbsence
};
