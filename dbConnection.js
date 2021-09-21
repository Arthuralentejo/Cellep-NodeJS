const { Pool } = require('pg')


const client = new Pool({
    connectionString: 'postgres://zbgytapkxvxcsx:5dec7cba393824256a23d8ced44f7db6d4b0ad30d382bf35254d4936ee2b4fcd@ec2-3-219-111-26.compute-1.amazonaws.com:5432/de867150eoetc5'
})