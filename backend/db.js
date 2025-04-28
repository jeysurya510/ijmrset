const mysql = require('mysql2/promise');
require('dotenv').config();

// Validate environment variables
const requiredVars = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD'];
for (const varName of requiredVars) {
  if (!process.env[varName]) {
    console.error(`❌ Missing required environment variable: ${varName}`);
    process.exit(1);
  }
}

const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 20000, // 20 seconds
  ssl: process.env.NODE_ENV === 'production' ? { 
    rejectUnauthorized: false 
  } : null
};

const db = mysql.createPool(dbConfig);

// Test connection without logging credentials
db.getConnection()
  .then(conn => {
    console.log('✅ Database connection established');
    conn.release();
  })
  .catch(err => {
    console.error('❌ Connection failed:', {
      error: err.message,
      code: err.code,
      host: dbConfig.host, // Only log host, not credentials
      port: dbConfig.port
    });
    process.exit(1);
  });

module.exports = db;
