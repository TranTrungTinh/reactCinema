const { Router } = require('express');
const passport = require('passport');

const authRouter = Router();

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failure' }),
  (req, res) => res.send({ success: true, user: req.currentUser })
);

module.exports = { authRouter };