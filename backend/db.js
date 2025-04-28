const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'shortline.proxy.rlwy.net', // From Settings (Public Networking)
  port: 28689,                       // From Settings (Public Networking)
  user: 'root',           // From Variables (MYSQLUSER) — it's hidden, you must copy from Railway
  password: 'mytISxVaIAjxmvpAUXhUOoTOCypMyhUn',   // From Variables (MYSQLPASSWORD) — shown partly in Variables
  database: 'railway',               // From Variables (MYSQL_DATABASE)
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err);
    return;
  }
  console.log('✅ Connected to MySQL Database!');
});

module.exports = db;
