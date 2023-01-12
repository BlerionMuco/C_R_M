'use strict';

const express = require('express');
const rolesController = require('../controllers/rolesController');
const router = express.Router();

router.get('/roles', rolesController.getAllRoles);

module.exports = {
    routes: router
}