const mysql = require('mysql2');


require('dotenv').config();
const mysql = require('mysql2/promise'); // Using promise interface

const pool = mysql.createPool({
  host: process.env.MYSQLHOST || 'mysql.railway.internal', // Internal is faster
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'myt15s0da1Ajxmpubtkb010cyptyhln',
  database: process.env.MYSQLDATABASE || 'railway',
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  ssl: { rejectUnauthorized: true } // Critical for production
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
