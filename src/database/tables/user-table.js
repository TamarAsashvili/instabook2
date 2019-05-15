'use strict';

const database = require('../database');

const createTable = ( ) => database.query(`
     CREATE TABLE
      users
      (
        id SERIAL PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_naem TEXT NOT NULL,
        email TEXT NOT NULL

      );
`) ;

(async () => await createTable())();





