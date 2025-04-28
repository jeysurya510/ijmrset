// db.js - Correct implementation
const mysql = require('mysql2/promise'); // SINGLE declaration

const db = mysql.createPool({
  host: 'containers-us-west-45.railway.app',
  user: 'root',
  password: 'mytISxVaIAjxmvpAUXhUOoTOCypMyhUn', // Get from Railway Variables tab
  database: 'railway',
  port: 6872, // Default Railway MySQL port
  ssl: { rejectUnauthorized: true }
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
