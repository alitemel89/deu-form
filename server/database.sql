CREATE DATABASE arge;

CREATE TABLE lecturer(
    lecturer_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    surname VARCHAR(50),
    email VARCHAR(255),
    password VARCHAR(100)
);

CREATE TABLE lecturer_info(
    name VARCHAR(50), 
    surname VARCHAR(50), 
    email VARCHAR(50), 
    gender VARCHAR(50), 
    birthDate DATE,  
    tenureTitle VARCHAR(50), 
    tenureDate DATE, 
    academicTitle VARCHAR(50),
    academicDate DATE, 
    faculty VARCHAR(50),
    department VARCHAR(50),
    division VARCHAR(50), 
    undergraduateHours NUMERIC, 
    graduateHours NUMERIC,
    languageScore NUMERIC,
    projectsOwner NUMERIC, 
    projectsResearcher NUMERIC,
    administrativeDuty VARCHAR(50)
);