'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllRoles = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('staticData');
        const rolesList = await pool.request().query(sqlQueries.getUserRole);
        return rolesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getAllReasons = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('staticData');
        const reasonsList = await pool.request().query(sqlQueries.getReasons);
        return reasonsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllRoles,
    getAllReasons
}