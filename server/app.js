const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const { movieRouter } = require('./routes/movie.route');

const app = express();
app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get('/', (req, res) => res.send({success: true, message: 'App Work'}));

app.use('/', movieRouter);

module.exports = { app };