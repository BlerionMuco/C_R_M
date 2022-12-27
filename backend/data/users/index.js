'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllUsers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const userslist = await pool.request().query(sqlQueries.userslist);
        return userslist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async (userId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const user = await pool.request()
            .input('userId', sql.Int, userId)
            .query(sqlQueries.userById);
        return user.recordset;
    } catch (error) {
        return error.message;
    }
}

const createUser = async (userData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertUser = await pool.request()
            .input('firstName', sql.NVarChar(250), userData.firstName)
            .input('lastName', sql.NVarChar(250), userData.lastName)
            .input('age', sql.NVarChar(250), userData.age)
            .input('username', sql.NVarChar(250), userData.username)
            .input('email', sql.NVarChar(250), userData.email)
            .input('phone_number', sql.NVarChar(250), userData.phone_number)
            .input('user_password', sql.NVarChar(250), userData.user_password)
            .input('user_verification_password', sql.NVarChar(250), userData.user_verification_password)
            .input('role_id', sql.Int(250), userData.role_id)
            .query(sqlQueries.createUser);
        return insertUser.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUser = async (userId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const update = await pool.request()
            .input('userId', sql.Int, userId)
            .input('firstName', sql.NVarChar(250), userData.firstName)
            .input('lastName', sql.NVarChar(250), userData.lastName)
            .input('age', sql.NVarChar(250), userData.age)
            .input('username', sql.NVarChar(250), userData.username)
            .input('email', sql.NVarChar(250), userData.email)
            .input('phone_number', sql.NVarChar(250), userData.phone_number)
            .input('user_password', sql.NVarChar(250), userData.user_password)
            .input('user_verification_password', sql.NVarChar(250), userData.user_verification_password)
            .input('role_id', sql.Int(250), userData.role_id)
            .query(sqlQueries.updateUser);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteUser = async (userId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const deleteUser = await pool.request()
            .input('userId', sql.Int, userId)
            .query(sqlQueries.deleteUser);
        return deleteUser.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getAllUsers,
    getById,
    createUser,
    updateUser,
    deleteUser
}