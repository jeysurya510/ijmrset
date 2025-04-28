const mysql = require('mysql2/promise');
require('dotenv').config();

// Validate critical environment variables
const requiredVars = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD'];
for (const varName of requiredVars) {
  if (!process.env[varName]) {
    console.error(`❌ Missing required env var: ${varName}`);
    process.exit(1);
  }
}

const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 20000, // 20 seconds
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false // REQUIRED for Railway
  },
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
};

console.log('Using DB config:', {
  host: dbConfig.host,
  port: dbConfig.port,
  database: dbConfig.database
});

const db = mysql.createPool(dbConfig);

// Enhanced connection test
async function verifyConnection() {
  let conn;
  try {
    conn = await db.getConnection();
    console.log('✅ Acquired connection from pool');
    
    // Test query
    const [rows] = await conn.query('SELECT CONNECTION_ID() AS conn_id');
    console.log('Connection ID:', rows[0].conn_id);
    
    return true;
  } catch (err) {
    console.error('❌ Connection failed:', {
      error: err.message,
      code: err.code,
      config: {
        host: dbConfig.host,
        port: dbConfig.port,
        usingSSL: !!dbConfig.ssl
      }
    });
    return false;
  } finally {
    if (conn) await conn.release();
  }
}

// Verify on startup
verifyConnection().then(success => {
  if (!success) {
    console.log('\n🚨 Railway Connection Guide:');
    console.log('1. Run: railway connect mysql');
    console.log('2. Verify in Railway dashboard:');
    console.log('   - Service status is "Running"');
    console.log('   - Variables match exactly');
    console.log('3. Check IP whitelisting in Networking');
    process.exit(1);
  }
});

module.exports = db;
