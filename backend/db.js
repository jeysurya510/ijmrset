const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || 'containers-us-west-45.railway.app',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'mytISxVaIAjxmvpAUXhUOoTOCypMyhUn',
  database: process.env.DB_NAME || 'railway',
  port: parseInt(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 15000, // Increased timeout
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false // MUST be false for Railway
  },
  // Add these TCP keepalive settings:
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
};

const db = mysql.createPool(dbConfig);

// Enhanced connection test with Railway-specific debugging
async function testConnection() {
  let connection;
  try {
    console.log('Attempting to connect with config:', {
      host: dbConfig.host,
      port: dbConfig.port,
      database: dbConfig.database,
      ssl: dbConfig.ssl
    });

    connection = await db.getConnection();
    console.log('✅ Successfully connected to MySQL on Railway');
    
    // Test a simple query
    const [result] = await connection.query('SELECT 1 + 1 AS solution');
    console.log('Connection test successful. Result:', result[0].solution);
    
    return true;
  } catch (err) {
    console.error('❌ Railway Connection Failed:', {
      error: err.message,
      code: err.code,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      // Important debug info:
      attemptedConnection: {
        host: dbConfig.host,
        port: dbConfig.port,
        usingSSL: dbConfig.ssl ? true : false
      }
    });

    // Suggested fixes in the error message
    if (err.code === 'ETIMEDOUT') {
      console.log('\n🚨 Railway Connection Troubleshooting:');
      console.log('1. Verify your database is running in Railway dashboard');
      console.log('2. Check your IP is whitelisted in Railway Networking');
      console.log('3. Try these connection commands:');
      console.log('   - For local testing: `railway connect mysql`');
      console.log('   - For production: Use Railway-provided connection URL');
    }

    return false;
  } finally {
    if (connection) await connection.release();
  }
}

// Initialize connection
testConnection().then(success => {
  if (!success) {
    console.error('Failed to establish database connection');
    if (process.env.NODE_ENV === 'production') {
      process.exit(1); // Exit in production if DB is critical
    }
  }
});

module.exports = db;
