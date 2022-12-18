var express = require('express');
var app = express();
const dotenv = require('dotenv').config();

console.log("HELOOOOOOOOOOOOOO", dotenv)

app.get('/', function (req, res) {

    var sql = require("mssql");
    console.log("asfsdgfdfg", process.env.SQL_SERVER);
    // config for your database
    var config = {
        server: process.env.SQL_SERVER,
        authentication: {
            type: 'default',
            options: {
                userName: process.env.SQL_USERNAME,
                password: process.env.SQL_PASSWORD
            }
        },
        options: {
            //port: Number(process.env.SQL_PORT)
            port: parseInt(process.env.SQL_PORT) // <-- add your custom port here
        },
        trustServerCertificate: true,
        database: process.env.SQL_DATABASE
    };

    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from users', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running...');
});