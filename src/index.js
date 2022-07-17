const app = require("./app");

const key = require('./config/main');
const ConnectDB = require('./config/db');

const { port, mongoURL } = key;

ConnectDB(mongoURL).then(r => console.log(`MongoDB connect to ${mongoURL}`));

app.listen(app.get("port"), () => console.log(`Server is running on port ${port}`));