CREATE DATABASE arge;

CREATE TABLE lecturer(
    lecturer_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    surname VARCHAR(50),
    email VARCHAR(255),
    password VARCHAR(100)
);