'use strict';

const express = require('express');
const absencesController = require('../controllers/absencesController');
const router = express.Router();

router.get('/absences/:userId', absencesController.getUserAbsences);
router.post('/absences', absencesController.createAbsence);

module.exports = {
    routes: router
}