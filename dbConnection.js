const { Pool } = require('pg')


const client = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://zrhooabzaltead:cf49300589c97e8cd1dcda1d05dd6622d2be5c8114f4a804b65295ee1761f894@ec2-34-227-120-94.compute-1.amazonaws.com:5432/d48ge1ift38nfi',
    ssl: {
        rejectUnauthorized: false,

    }
})

// async function conectTeste() {
//     const res = client.query('SELECT $1:: text as message', ['Ola mundo'], ((err, result) => { console.log(result.rows[0].message) }))

// }

// conectTeste()

module.exports = client