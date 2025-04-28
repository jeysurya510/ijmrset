const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: 'mysql.ralways.internal',
  port: 3306,
  user: 'root',
  password: 'myt15s0da1Ajxmpubtkb010cyptyhln',
  database: 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 20000,
  ssl: null
};

console.log('Using INTERNAL DB config:', {
  host: dbConfig.host,
  port: dbConfig.port
});

const db = mysql.createPool(dbConfig);

// Test connection
db.getConnection()
  .then(conn => {
    console.log('✅ Connected to Railway MySQL via internal network');
    return conn.query('SELECT 1 + 1 AS result')
      .then(([rows]) => {
        console.log('Connection test:', rows[0].result);
        conn.release();
      });
  })
  .catch(err => {
    console.error('❌ Connection failed:', {
      error: err.message,
      code: err.code,
      config: dbConfig
    });
    
    console.log('\n🚨 Immediate Action Required:');
    console.log('1. Contact Railway support with these details');
    console.log('2. Request internal DNS verification for mysql.ralways.internal');
    process.exit(1);
  });

module.exports = db;
