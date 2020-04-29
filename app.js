const express = require('express');
const morgan = require('morgan');

const todoRouter = require('./routes/todoRouter');

const app = express();

//Middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes

app.use('/api/v1/todos', todoRouter);

module.exports = app;
