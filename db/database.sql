CREATE DATABASE IF NOT EXISTS bancubidb;

Use bancubidb;

CREATE TABLE users_personal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);


INSERT INTO users_personal VALUES
    (1,1)