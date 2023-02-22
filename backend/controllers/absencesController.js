"use strict";
const { stat } = require("fs-extra");
const absenceData = require("../data/absences");

const getAllAbsences = async (req, res, next) => {
  try {
    const absencesList = await absenceData.getAllAbsences();
    res.send(absencesList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

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
    const dataReturn = { ...insert };
    res.send({
      status: "success",
      message: "Absence created successfully !",
      dataReturn,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateAbsenceStatus = async (req, res, next) => {
  try {
    const absence = req.body;
    const absencesList = await absenceData.updateAbsenceStatus(absence);
    res.send(absencesList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getUserAbsences,
  createAbsence,
  updateAbsenceStatus,
  getAllAbsences,
};
