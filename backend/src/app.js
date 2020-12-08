const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const db = require('./configs/database');
db.connect();

const index = require('./routes/index');
const users = require('./routes/userRoutes');
const plants = require('./routes/plantRoutes');

app.use(cors());
app.use(express.json());

app.use('/', index);
app.use('/users', users);
app.use('/plants', plants);

module.exports = app