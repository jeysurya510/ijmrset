const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'proxy.rfwy.net',
  port: 28689,
  user: 'root',
  password: 'myt15s0da1Ajxmpubtkb010cyptyhln',
  database: 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 20000,
  ssl: { rejectUnauthorized: false }, // MUST be false
  enableKeepAlive: true
};

console.log('Using PUBLIC DB config:', {
  host: dbConfig.host,
  port: dbConfig.port
});

const db = mysql.createPool(dbConfig);

// Connection test
db.getConnection()
  .then(conn => {
    console.log('✅ Connected via Railway public proxy');
    return conn.query('SELECT 1')
      .then(() => conn.release());
  })
  .catch(err => {
    console.error('❌ Connection failed:', {
      error: err.message,
      config: {
        host: dbConfig.host,
        port: dbConfig.port,
        usingSSL: true
      }
    });
    
    console.log('\n🚨 REQUIRED ACTIONS:');
    console.log('1. Enable Public Networking in Railway');
    console.log('2. Whitelist Render IP in Networking');
    console.log('3. Verify password in Railway Variables');
    process.exit(1);
  });

module.exports = db;
