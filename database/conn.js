const mongoose = require('mongoose');
const { DB_URI, DB_DATABASE } = require('../config');

mongoose.connect(`${DB_URI}/${DB_DATABASE}`);