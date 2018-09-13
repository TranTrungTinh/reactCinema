const { app } = require('./app');
const {PORT} = require('./config/config');

require('./helpers/connectDB');
app.listen(PORT, () => console.log("Server started port " + PORT));
