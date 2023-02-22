"use strict";

const express = require("express");
const absencesController = require("../controllers/absencesController");
const router = express.Router();

router.get("/absences", absencesController.getAllAbsences);
router.get("/absences/:userId", absencesController.getUserAbsences);
router.post("/absences", absencesController.createAbsence);
router.put("/absences", absencesController.updateAbsenceStatus);

module.exports = {
  routes: router,
};
