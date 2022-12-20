'use strict'
const assert = require('assert');
const dotenv = require('dotenv');
dotenv.config();

const { SQL_SERVER, PORT, HOST, HOST_URL, SQL_USERNAME, SQL_PASSWORD, SQL_PORT, SQL_DATABASE } = process.env

assert(SQL_PORT, 'PORT is required')

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USERNAME,
        password: SQL_PASSWORD,
        options: {
            encrypt: false,
            enableArithAbort: true,
            trustServerCertificate: true,
        }
    }
}