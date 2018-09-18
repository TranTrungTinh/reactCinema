const parser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const { devConfig } = require('../config/env/development');
const { configureGoogleStrategy } = require('./passport-google');
const { configureFacebookStrategy } = require('./passport-facebook');
const { User } = require('../models/user.model');

const setGlobalMiddleware = app => {
  app.use(cors());
  app.use(parser.urlencoded({ extended: true }));
  app.use(parser.json());
  app.use(
    session({
      secret: devConfig.secret,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize({ userProperty: 'currentUser' }));
  app.use(passport.session());

  configureGoogleStrategy();
  configureFacebookStrategy();

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  // extract the userId from session
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });

  app.get('/failure', (req, res) => res.send({ error: 'FAIL TO AUTHORIZE GOOGLE' }));

}

module.exports = { setGlobalMiddleware }