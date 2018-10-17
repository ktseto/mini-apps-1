const mysql = require('mysql');
const Promise = require('bluebird');
const createTables = require('./config');

const database = 'checkout';

const conn = mysql.createConnection({
  user: 'student',
  password: 'student'
});

const db = Promise.promisifyAll(conn, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} as ${db.threadId}.`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

module.exports = db;