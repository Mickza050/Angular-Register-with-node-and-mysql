# Angular-Register-with-node-and-mysql
A simple register system in angular with node and mysql database
***** Node libary you have to install *****
npm init -y
npm install express mysql crypto-js
npm install cors


***** Database table list *****
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(255) UNIQUE,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

******************************
Don't forget to change your Database info in "backend" file.
