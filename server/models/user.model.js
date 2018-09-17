const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  local: {
    email: String,
    password: String,
  },
  google: {
    id: String,
    email: String,
    displayName: String,
    image: String,
    token: String,
  },
  twitter: {
    id: String,
    username: String,
    token: String,
    displayName: String,
  },
  github: {
    id: String,
    email: String,
    displayName: String,
    token: String,
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = { User };

