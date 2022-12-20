'use strict';

const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUser);
// router.post('/users', usersController.addUser);
// router.put('/users/:id', usersController.updateUser);
// router.delete('/users/:id', usersController.deleteUser);


module.exports = {
    routes: router
}