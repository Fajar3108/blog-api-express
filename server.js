require('./database/conn');
const express = require('express');
const { APP_PORT } = require('./config');
const app = express();

app.use(express.json());

app.listen(APP_PORT, () => {
    console.log(`App listening on port http://localhost:${APP_PORT}`);
});

