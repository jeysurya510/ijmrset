const mysql = require('mysql2/promise');
require('dotenv').config();

// Railway-specific optimized configuration
const dbConfig = {
  host: process.env.DB_HOST || 'proxy.rfwy.net', // From your screenshot
  port: parseInt(process.env.DB_PORT) || 28689,  // From your screenshot
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD, // Always use env variables for passwords
  database: process.env.DB_NAME || 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 15000, // 15 seconds timeout
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false // Railway requirement
  },
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  namedPlaceholders: true // For safer queries
};

const db = mysql.createPool(dbConfig);

// Enhanced connection test with Railway-specific checks
async function verifyConnection() {
  let conn;
  try {
    console.log('🔌 Testing Railway MySQL connection...');
    conn = await db.getConnection();
    
    // Test query that works with all MySQL versions
    const [results] = await conn.query('SELECT CONNECTION_ID() AS connection_id');
    console.log('✅ Railway Connection Successful! Connection ID:', results[0].connection_id);
    
    return true;
  } catch (err) {
    console.error('❌ Railway Connection Failed:', {
      error: err.message,
      code: err.code,
      config: {
        host: dbConfig.host,
        port: dbConfig.port,
        database: dbConfig.database
      }
    });
    
    // Railway-specific troubleshooting tips
    console.log('\n🚀 Railway Quick Fixes:');
    console.log('1. Run `railway connect mysql` to test credentials');
    console.log('2. Check Variables tab for correct DB_PASSWORD');
    console.log('3. Whitelist IP in Settings → Networking');
    console.log(`4. Try host: 'mysql.ralways.internal' for internal services`);
    
    return false;
  } finally {
    if (conn) await conn.release();
  }
}

// Execute on require (but only once)
let connectionTestDone = false;
if (!connectionTestDone) {
  verifyConnection().then(success => {
    if (!success && process.env.NODE_ENV === 'production') {
      process.exit(1); // Exit if production and no DB connection
    }
  });
  connectionTestDone = true;
}

module.exports = {
  pool: db,
  query: db.query.bind(db),
  getConnection: db.getConnection.bind(db),
  checkHealth: async () => {
    try {
      const [res] = await db.query('SELECT 1 AS ok');
      return { status: 'healthy', db: res[0].ok === 1 };
    } catch (err) {
      return { status: 'unhealthy', error: err.message };
    }
  }
};
