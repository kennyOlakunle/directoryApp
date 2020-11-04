const express = require('express');
const genres = require('../Routes/genres');
const customers = require('../Routes/customers');
const movies = require('../Routes/movies');
const rentals = require('../Routes/rentals');
const users = require('../Routes/users');
const auth = require('../Routes/auth');
const returns = require('../Routes/returns');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/genres', genres);
  app.use('/api/customers', customers);
  app.use('/api/movies', movies);
  app.use('/api/rentals', rentals);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/returns', returns);
  app.use(error);
};
