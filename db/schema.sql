CREATE DATABASE IF NOT EXISTS players_db;
USE players_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS players;

# Create the burgers table
CREATE TABLE players (
id int NOT NULL AUTO_INCREMENT,
player_name varchar(255) NOT NULL,
judge BOOL DEFAULT false,
PRIMARY KEY (id)
);