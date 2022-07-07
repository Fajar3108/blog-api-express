require('./database/conn');
const express = require('express');
const cors = require('cors');
const { APP_PORT } = require('./config');

const app = express();

app.use(express.json());
app.use(cors())

app.listen(APP_PORT, () => {
    console.log(`App listening on port http://localhost:${APP_PORT}`);
});

