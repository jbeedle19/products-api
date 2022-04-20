require('dotenv').config();
const { createClient } = require('redis');

const redis = async (key, value, time) => {
    const client = createClient({
        port: process.env.REDPORT
    });

    await client.connect();
    await client.set(key, JSON.stringify(value), 'EX', time);

    const res = await client.get(key);
};

module.exports = { redis };