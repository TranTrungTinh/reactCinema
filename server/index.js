const { app } = require('./app');
const { devConfig } = require('./config/env/development');

require('./helpers/connectDB');
app.listen(devConfig.PORT, () => console.log("Server started port " + devConfig.PORT));
