const { Router } = require('express');
const passport = require('passport');

const authRouter = Router();

// Google
authRouter.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
authRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failure' }),
  (req, res) => res.send({ success: true, user: req.currentUser })
);

// Facebook
authRouter.get('/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'user_photos']
  })
);

authRouter.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/failure' }),
  (req, res) => res.send({ success: true, user: req.currentUser })
);


module.exports = { authRouter };