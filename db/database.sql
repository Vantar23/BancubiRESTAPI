CREATE DATABASE IF NOT EXISTS bancubidb;

Use bancubidb;

CREATE TABLE Users_personal (
    id INT PRIMARY KEY,
    user VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO Users_personal VALUES
    (1,1)