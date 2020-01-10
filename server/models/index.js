var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(err, results) {
        if (err) {
          throw (err);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      //console.log(data.message, data.username, data.roomname);
      db.connection.query('INSERT INTO messages (text, userID, roomName) VALUES ("Mark", 1 , "lobby")', (err, data) => {
      // console.log('success');
        callback(null, data);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query('SELECT userName FROM users', function(err, results) {
        if (err) {
          throw (err);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (name, callback) {
      console.log(name);
      db.connection.query('INSERT INTO users (userName) VALUES (?)', name, function(err, results) {
        if (err) {
          throw (err);
        } else {
          callback(null, results);
        }
      });
    }
  }
};