var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.connection = mysql.createConnection({
  host: 'localhost:3000',
  user: 'student',
  password: 'student',
  database: 'chat'
});


