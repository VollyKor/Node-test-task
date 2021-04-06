import sqlite3, { OPEN_CREATE } from 'sqlite3';
import { createTableCashiers } from '../helpers/sqlQueries';
import path from 'path';
sqlite3.verbose();

const dbPath = path.resolve(__dirname, 'data_base.db');

const db = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | OPEN_CREATE,
  err => {
    if (err) {
      console.log('error', err.message);
      process.exit(1);
    } else {
      console.log('Connected to the SQlite database.');

      db.run(createTableCashiers, err => {
        if (err) console.log(err);
      });
    }
  },
);

process.on('SIGINT', () => {
  db.close();
  console.log('Connection for db closed and app termination');
  process.exit(1);
});

export default db;
