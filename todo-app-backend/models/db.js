const mysql = require('mysql2');

const db = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root123',
  database:'todo_app',
  port:3306
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = db;