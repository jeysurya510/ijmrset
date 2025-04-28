const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'containers-us-west-45.railway.app',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'mytISxVaIAjxmvpAUXhUOoTOCypMyhUn',
  database: process.env.DB_NAME || 'railway',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: process.env.NODE_ENV === 'production' ? true : false
  }
});

// Test connection
db.getConnection()
  .then((connection) => {
    console.log('✅ Connected to MySQL Database');
    connection.release();
  })
  .catch((err) => {
    console.error('❌ MySQL Connection Failed:', err.message);
    if (process.env.NODE_ENV !== 'production') {
      console.error('Connection config:', {
        host: db.config.connectionConfig.host,
        user: db.config.connectionConfig.user,
        database: db.config.connectionConfig.database,
        port: db.config.connectionConfig.port
      });
    }
  });

module.exports = db;
