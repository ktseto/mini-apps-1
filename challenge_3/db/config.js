const Promise = require('bluebird');

module.exports = (db) => {
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS account (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
    );`)
    .then(() => {
      return db.queryAsync(`
        CREATE TABLE IF NOT EXISTS contact (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        address_l1 VARCHAR(255),
        address_l2 VARCHAR(255),
        city VARCHAR(255),
        state VARCHAR(2),
        zip VARCHAR(5),
        phone VARCHAR(20)
      );`)
    })
    .then(() => {
      return db.queryAsync(`
        CREATE TABLE IF NOT EXISTS billing (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        card_number VARCHAR(50),
        expiration_month INT,
        expiration_year INT,
        zip VARCHAR(5),
        password VARCHAR(255)
        );`)
    })
    .then(() => {
      return db.queryAsync(`
        CREATE TABLE IF NOT EXISTS checkout (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        account_id INT,
        contact_id INT,
        billing_id INT,
        purchased INT,
        FOREIGN KEY (account_id) REFERENCES account(id) ON DELETE CASCADE,
        FOREIGN KEY (contact_id) REFERENCES contact(id) ON DELETE CASCADE,
        FOREIGN KEY (billing_id) REFERENCES billing(id) ON DELETE CASCADE
      );`)
    })
    .error(err => console.log(err));
};