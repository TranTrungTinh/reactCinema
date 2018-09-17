const mongoose = require('mongoose');
const { devConfig } = require('../config/env/development');

function getDatabaseUri() {
  return devConfig.database.local;
}

mongoose.connect(getDatabaseUri(), {useNewUrlParser: true})
.then(() => console.log('Database connected'))
.catch(error => {
  console.log(error.message);
  process.exit(1);
});