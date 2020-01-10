DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(255)
);

-- CREATE TABLE rooms (
--   roomID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   roomName VARCHAR(255)
-- );

CREATE TABLE messages (
  messageId INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(255),
  userID INT NOT NULL,
  roomName VARCHAR(255),
  PRIMARY KEY (messageId),
  FOREIGN KEY (userID) REFERENCES users(userID)
  -- FOREIGN KEY (roomID)
  -- REFERENCES rooms(roomID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

