require('./database/conn');
const express = require('express');
const app = express();
const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});

