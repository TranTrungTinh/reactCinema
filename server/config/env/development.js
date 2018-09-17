const devConfig = {
  PORT: 3001,
  secret: 'Acasdz434dasTewloRwi',
  database: {
    local: 'mongodb://localhost:27017/react-cinema'
  },
  google: {
    clientId: '738713087705-nke7jqllbe5e9kfnuvr291mj6tck6ojg.apps.googleusercontent.com',
    clientSecret: 'iJ3tDUtR4DMfbBOispUGoqP4',
    callbackURL: 'http://localhost:3001/api/auth/google/callback'
  }
}

module.exports = { devConfig }