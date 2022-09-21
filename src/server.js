'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Home Path');
});

app.get('/bad', (req, res, next) => {
  next('bad route');
});

app.get('/person', validator, (req, res, next) => {
  let { name } = req.query;
  res.status(200).send(name);

});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};
