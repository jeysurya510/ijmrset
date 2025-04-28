const mysql = require('mysql2');


const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sakthi123',  
  database: 'ijmrset_1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL Connection Failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL Database');
    connection.release();
  }
});

module.exports = db;
