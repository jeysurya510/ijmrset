// db.js - Correct implementation
const mysql = require('mysql2/promise'); // SINGLE declaration

const db = mysql.createPool({
  host: 'containers-us-west-45.railway.app',
  user: 'root',
  password: 'mytISxVaIAjxmvpAUXhUOoTOCypMyhUn',
  database: 'railway',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000, // 10 seconds timeout
  ssl: { 
    rejectUnauthorized: true 
  }
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL Connection Failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL Database');
    connection.release();
  }
});


// Only export the pool, not mysql
module.exports = db;
