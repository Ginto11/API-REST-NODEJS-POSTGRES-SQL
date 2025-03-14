import pg from 'pg';
import { DB_USER, DB_HOST, DB_PASSWORD, DB_PORT, DB_DATABASE } from '../config.js';

export const pool = new pg.Pool({
    user : DB_USER,
    host : DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE,
    ssl: {
        rejectUnauthorized: false
      }
})

