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

module.exports = {
    getAllUsers,
    getById
}