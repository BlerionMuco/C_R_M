const sql = require('mssql');
const utils = require('../utils');
const config = require('../../config')

const authUser = async ({ username, user_password }) => {
    console.log({ username, user_password });
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('auth');
        const auth = await pool.request()
            .input('username', sql.NVarChar(250), username)
            .input('user_password', sql.NVarChar(250), user_password)
            .query(sqlQueries.authUser);
        return auth.recordset;
    } catch (error) {
        return error.message;
    }
}
module.exports = {
    authUser
}
