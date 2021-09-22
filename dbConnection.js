const { Pool } = require('pg')


const client = new Pool({
    connectionString: process.env.DATABASE_URL || '',
    ssl: {
        rejectUnauthorized: false,

    }
})

// async function conectTeste() {
//     const res = client.query('SELECT $1:: text as message', ['Ola mundo'], ((err, result) => { console.log(result.rows[0].message) }))

// }

// conectTeste()

module.exports = client