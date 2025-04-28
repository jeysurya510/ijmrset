const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'proxy.rfwy.net', // Use the public proxy
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_NAME || 'railway',
  port: process.env.DB_PORT || 28689, // Use the public port
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 15000, // Increased timeout
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false // MUST be false for Railway
  },
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
});

// Test connection
db.getConnection()
  .then((connection) => {
    console.log('✅ Connected to MySQL via Railway proxy');
    connection.release();
  })
  .catch((err) => {
    console.error('❌ Connection Failed:', {
      error: err.message,
      attemptedConnection: {
        host: 'proxy.rfwy.net',
        port: 28689,
        usingSSL: true
      }
    });
    
    console.log('\n🚨 Railway Connection Help:');
    console.log('1. Verify your password in Railway Variables');
    console.log('2. Check IP whitelisting in Settings → Networking');
    console.log('3. Try temporary access: `railway connect mysql`');
  });

module.exports = db;
