const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const { devConfig } = require('../config/env/development');
const { User } = require('../models/user.model');

const configureFacebookStrategy = () => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: devConfig.facebook.clientId,
        clientSecret: devConfig.facebook.clientSecret,
        callbackURL: devConfig.facebook.callbackURL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          //   User.findOrCreate({ googleId: profile.id }, (err, user) => done(err, user));
          console.log('accessToken: ', accessToken);
          console.log('refreshToken: ', refreshToken);
          console.log('profile: ', profile);

          // find the user by google id
          // const user = await User.findOne({ 'google.id': profile.id });
          // if (user) return done(null, user);

          // // otherwise create the user with google
          // const newUser = new User({});
          // // save accessToken, email, displayName, id
          // newUser.facebook.id = profile.id;
          // newUser.facebook.token = accessToken;
          // newUser.facebook.displayName = profile.displayName;
          // newUser.facebook.email = profile.emails[0].value;
          // newUser.facebook.image = profile.photos[0].value;
          // await newUser.save();
          done(null, {});
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};

module.exports = { configureFacebookStrategy }