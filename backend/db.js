const mysql = require('mysql2/promise');
require('dotenv').config();

// Railway-optimized configuration
const dbConfig = {
  host: process.env.DB_HOST || 'mysql.ralways.internal', // Internal DNS
  port: parseInt(process.env.DB_PORT) || 3306, // Default MySQL port
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD, // Always use env var
  database: process.env.DB_NAME || 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 15000,
  queueLimit: 0,
  ssl: process.env.NODE_ENV === 'production' ? { 
    rejectUnauthorized: false 
  } : null,
  enableKeepAlive: true
};

const db = mysql.createPool(dbConfig);

// Enhanced connection test
db.getConnection()
  .then(conn => {
    console.log('✅ Connected to Railway MySQL via internal network');
    conn.release();
  })
  .catch(err => {
    console.error('❌ Final Connection Attempt Failed:', {
      error: err.message,
      code: err.code,
      config: {
        host: dbConfig.host,
        port: dbConfig.port
      }
    });
    
    console.log('\n🚨 ULTIMATE TROUBLESHOOTING:');
    console.log('1. Run this in terminal: railway connect mysql');
    console.log('2. Verify service status in Railway dashboard');
    console.log('3. Check ALL variables match exactly');
    console.log('4. Contact Railway support with your service logs');
    
    process.exit(1); // Hard exit in production
  });

module.exports = db;
