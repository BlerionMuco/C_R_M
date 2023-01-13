'use strict';

const express = require('express');
const staticController = require('../controllers/staticDataController');
const router = express.Router();

router.get('/roles', staticController.getAllRoles);
router.get('/reasons', staticController.getAllReasons);

module.exports = {
    routes: router
}