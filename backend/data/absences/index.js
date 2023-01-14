'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUserAbsences = async (userId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('absences');
        const absencesList = await pool.request()
            .input('userId', sql.Int, userId)
            .query(sqlQueries.getAbsences);
        return absencesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const createAbsence = async (absenceDate) => {
    console.log({ absenceDate });
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('absences');
        const insertAbsence = await pool.request()
            .input('userId', sql.Int, absenceDate.userId)
            .input('reasonId', sql.Int, absenceDate.reasonId)
            .input('startDate', sql.Date, absenceDate.startDate)
            .input('endDate', sql.Date, absenceDate.endDate)
            .input('approve', sql.Bit, absenceDate.approve)
            .query(sqlQueries.createAbsence);
        return { status: "fullfilled", message: "Absence Created" };
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUserAbsences,
    createAbsence
}