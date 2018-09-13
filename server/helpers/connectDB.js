const mongoose = require('mongoose');

function getDatabaseUri() {
  const dbLocal = 'mongodb://localhost:27017/react-cinema';
  return dbLocal;
}

mongoose.connect(getDatabaseUri(), {useNewUrlParser: true})
.then(() => console.log('Database connected'))
.catch(error => {
  console.log(error.message);
  process.exit(1);
});