CREATE DATABASE SchoolApp
   WITH ENCODING='UTF8'
   OWNER=postgres
   CONNECTION LIMIT=30
   TABLESPACE=pg_default;



CREATE TABLE proffesors (
    identification TEXT NOT NULL,
    names TEXT NOT NULL,
    lastName TEXT NOT NULL,
    gender TEXT NOT NULL,
    PRIMARY KEY(identification)
);



CREATE TABLE Students (
    identification TEXT NOT NULL,
    names TEXT NOT NULL,
    lastName TEXT NOT NULL,
    gender TEXT NOT NULL,
    PRIMARY KEY(identification)
);



CREATE TABLE Courses (
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    observations TEXT NOT NULL,
    PRIMARY KEY(code)
);