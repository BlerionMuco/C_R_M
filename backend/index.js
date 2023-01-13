'use strict'
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
const staticDataRoute = require('./routes/staticDataRoutes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(config.port, () => console.log('Server is running on http://localhost:' + config.port))
app.use('/api', usersRoutes.routes)
app.use('/api', authRoutes.routes)
app.use('/api', staticDataRoute.routes)