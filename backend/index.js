'use strict'
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
app.use('/api', usersRoutes.routes)

app.use(cors());
app.use(bodyParser.json());
app.listen(config.port, () => console.log('Server is running on http://localhost:' + config.port))