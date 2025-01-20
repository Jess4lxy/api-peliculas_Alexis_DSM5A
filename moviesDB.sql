-- Database: apiMovies-db

-- DROP DATABASE IF EXISTS "apiMovies-db";

CREATE DATABASE "apiMovies-db"
    WITH
    OWNER = "Jessie"
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = 3
    IS_TEMPLATE = False;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,           
    title VARCHAR(255) NOT NULL,     
    director VARCHAR(255),           
    genre VARCHAR(100),              
    score DECIMAL(3, 1),             
    rating VARCHAR(10),              
    year INT                          
);

INSERT INTO movies (id, title, director, genre, score, rating, year) VALUES
(1, 'The Shawshank Redemption', 'Frank Darabont', 'Drama', 9.3, 'R', 1994),
(2, 'The Godfather', 'Francis Ford Coppola', 'Crime, Drama', 9.2, 'R', 1972),
(3, 'The Dark Knight', 'Christopher Nolan', 'Action, Crime', 9.0, 'PG-13', 2008),
(4, 'Schindlers List', 'Steven Spielberg', 'Biography, Drama', 9.0, 'R', 1993),
(5, 'Pulp Fiction', 'Quentin Tarantino', 'Crime, Drama', 8.9, 'R', 1994),
(6, 'Fight Club', 'David Fincher', 'Drama', 8.8, 'R', 1999),
(7, 'Forrest Gump', 'Robert Zemeckis', 'Drama, Romance', 8.8, 'PG-13', 1994),
(8, 'Inception', 'Christopher Nolan', 'Action, Sci-Fi', 8.8, 'PG-13', 2010),
(9, 'The Matrix', 'Lana Wachowski, Lilly Wachowski', 'Action, Sci-Fi', 8.7, 'R', 1999),
(10, 'Se7en', 'David Fincher', 'Crime, Drama, Mystery', 8.6, 'R', 1995),
(11, 'The Silence of the Lambs', 'Jonathan Demme', 'Crime, Drama, Thriller', 8.6, 'R', 1991),
(12, 'Interstellar', 'Christopher Nolan', 'Adventure, Drama, Sci-Fi', 8.6, 'PG-13', 2014),
(13, 'Parasite', 'Bong Joon Ho', 'Comedy, Drama, Thriller', 8.5, 'R', 2019),
(14, 'The Green Mile', 'Frank Darabont', 'Crime, Drama', 8.6, 'R', 1999),
(15, 'Gladiator', 'Ridley Scott', 'Action, Drama', 8.5, 'R', 2000),
(16, 'Joker', 'Todd Phillips', 'Crime, Drama, Thriller', 8.4, 'R', 2019),
(17, 'Avengers: Endgame', 'Anthony Russo, Joe Russo', 'Action, Adventure, Drama', 8.4, 'PG-13', 2019),
(18, 'The Wolf of Wall Street', 'Martin Scorsese', 'Biography, Comedy, Crime', 8.2, 'R', 2013),
(19, 'The Lion King', 'Roger Allers, Rob Minkoff', 'Animation, Adventure, Drama', 8.5, 'G', 1994),
(20, 'Titanic', 'James Cameron', 'Drama, Romance', 7.9, 'PG-13', 1997);
