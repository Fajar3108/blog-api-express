const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.DB_URI;

const client = new MongoClient(uri);

const run = async () => {
    try {
        const db = client.db(process.env.DB_DATABASE);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);