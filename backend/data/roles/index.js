'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllRoles = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const rolesList = await pool.request().query(sqlQueries.getUserRole);
        return rolesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllRoles
}