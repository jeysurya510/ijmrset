const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 15000,
  ssl: {
    rejectUnauthorized: false // REQUIRED for Railway
  }
};

const db = mysql.createPool(dbConfig);

// Verify connection
db.getConnection()
  .then(conn => {
    console.log('✅ Successfully connected to Railway MySQL');
    conn.release();
  })
  .catch(err => {
    console.error('❌ Connection failed:', {
      error: err.message,
      code: err.code,
      config: {
        host: dbConfig.host,
        port: dbConfig.port,
        usingSSL: !!dbConfig.ssl
      }
    });
    
    console.log('\n🔧 Final Troubleshooting Steps:');
    console.log('1. Execute: railway connect mysql');
    console.log('2. Verify in Railway dashboard:');
    console.log('   - MySQL service is "Running"');
    console.log('   - Variables match exactly');
    console.log('   - Networking shows public proxy active');
    console.log('3. Check IP whitelisting in Settings → Networking');
    
    process.exit(1);
  });

module.exports = db;
