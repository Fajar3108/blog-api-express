const { MongoClient } = require('mongodb');
const { DB_URI, DB_DATABASE } = require('../config');

const uri = DB_URI;

const client = new MongoClient(uri);

const run = async () => {
    try {
        const db = client.db(DB_DATABASE);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);