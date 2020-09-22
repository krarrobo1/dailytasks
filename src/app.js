const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', routes);
app.use(errorHandler);



module.exports = app;