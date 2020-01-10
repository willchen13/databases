var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, messages) => {
        if (err) {
          console.log(err);
        } else {
          res.end(messages);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (err, messages) => {
        if (err) {
          console.log(err);
        } else {
          res.end('success');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, users) => {
        if (err) {
          console.log(err);
        } else {
          res.end(users);
        }
      });
    },
    post: function (req, res) {
      models.messages.post(req.body.username, (err, messages) => {
        if (err) {
          console.log(err);
        } else {
          res.end('success');
        }
      });
    }
  }
};

