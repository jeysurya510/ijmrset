const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'shortline.proxy.rlwy.net', // use PUBLIC HOST
  port: 28689, // use PUBLIC PORT
  user: 'your_mysql_user', // from Railway Variables
  password: 'your_mysql_password', // from Railway Variables
  database: 'railway', // Database name
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err);
    return;
  }
  console.log('✅ Connected to MySQL Database!');
});

module.exports = connection;

