'use strict';

const pg = require('pg');

const pool = pg.Pool({
   connectionString: 'postgres://postgres:postgres@localhost:5432/instabook'
});


const query = async sql => (await pool.query(sql)).rows;


// (async () => {
//   const result = await query(`
//     SELECT
//         1 + 42 + 55;
//          AS result;
//    `);
//     console.log('CALCULATION=', result);
// })();


module.exports = {
    query
};


