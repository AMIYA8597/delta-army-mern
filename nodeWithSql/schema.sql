CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(62) UNIQUE,
    email VARCHAR(62) UNIQUE NOT NULL,
    password VARCHAR(62) UNIQUE NOT NULL
    );