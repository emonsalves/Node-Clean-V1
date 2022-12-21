const { Client } = require('pg')

let connection = async () => {
    try {
        const client = new Client({
            user: process.env.USER,
            host: process.env.HOST,
            database: process.env.DATABASE,
            password: process.env.PASS,
            port: process.env.DBPORT,
        });
        await client.connect();
        await client.end();

        return console.log("Connected");

    } catch (error) {
        console.log("Fail Connection" + error)
    }
}

connection()