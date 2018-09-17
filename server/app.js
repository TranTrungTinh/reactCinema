const express = require('express');

const { setGlobalMiddleware } = require('./middleware/global-middleware');
const { movieRouter } = require('./routes/movie.route');
const { authRouter } = require('./routes/auth.route');

const app = express();
setGlobalMiddleware(app);

app.get('/', (req, res) => res.send({success: true, message: 'App Work'}));

app.use('/api/movies', movieRouter);
app.use('/api/auth', authRouter);

module.exports = { app };