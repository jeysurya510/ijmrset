const mysql = require('mysql2/promise');
require('dotenv').config();

// Enhanced configuration with validation
const dbConfig = {
  host: process.env.DB_HOST || 'containers-us-west-45.railway.app',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'mytISxVaIAjxmvpAUXhUOoTOCypMyhUn',
  database: process.env.DB_NAME || 'railway',
  port: parseInt(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000,
  queueLimit: 0,
  ssl: {
    // Railway typically requires this to be false
    rejectUnauthorized: false
  },
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
};

// Create connection pool
const db = mysql.createPool(dbConfig);

// Enhanced connection test with retry logic
async function testConnection(retries = 3, delay = 2000) {
  let connection;
  for (let i = 0; i < retries; i++) {
    try {
      connection = await db.getConnection();
      console.log('✅ Successfully connected to MySQL database');
      
      // Verify basic query works
      const [result] = await connection.query('SELECT 1 + 1 AS solution');
      console.log('Connection test query result:', result[0].solution);
      
      connection.release();
      return true;
    } catch (err) {
      console.error(`❌ Connection attempt ${i + 1} failed:`, err.message);
      
      if (connection) {
        try {
          connection.release();
        } catch (releaseErr) {
          console.error('Error releasing connection:', releaseErr.message);
        }
      }
      
      if (i < retries - 1) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error('💥 All connection attempts failed');
        console.error('Connection configuration:', {
          host: dbConfig.host,
          port: dbConfig.port,
          database: dbConfig.database,
          ssl: dbConfig.ssl
        });
        
        if (process.env.NODE_ENV === 'production') {
          process.exit(1);
        }
        return false;
      }
    }
  }
}

// Enhanced query wrapper
db.queryWithRetry = async (sql, params, retries = 2) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await db.query(sql, params);
    } catch (err) {
      if (i === retries - 1 || err.code !== 'ECONNRESET') {
        throw err;
      }
      console.log(`Retrying query due to connection reset (attempt ${i + 1})`);
    }
  }
};

// Graceful shutdown handler
process.on('SIGINT', async () => {
  try {
    await db.end();
    console.log('Database pool closed gracefully');
    process.exit(0);
  } catch (err) {
    console.error('Error closing database pool:', err);
    process.exit(1);
  }
});

// Health check function
db.checkHealth = async () => {
  try {
    const [result] = await db.query('SELECT 1 AS health_check');
    return { status: 'healthy', details: result[0] };
  } catch (err) {
    return { 
      status: 'unhealthy',
      error: err.message,
      code: err.code
    };
  }
};

// Initialize connection
testConnection().then(success => {
  if (!success && process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
});

module.exports = db;
