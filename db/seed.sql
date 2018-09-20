-- do not change the order of insertion as games and user must be populated first in order to populate challenges
-- and scores.
USE gamelife;

INSERT INTO games (gameTitle,createdAt,updatedAt) VALUES 
("PONG","2018-09-15 23:30:23","2018-09-15 23:30:23"),
("MAZE","2018-09-15 23:30:23","2018-09-15 23:30:23"),
("BREAKOUT","2018-09-15 23:30:23","2018-09-15 23:30:23"),
("RUNOUT","2018-09-15 23:30:23","2018-09-15 23:30:23"),
("GAME 5","2018-09-15 23:30:23","2018-09-15 23:30:23");

Insert into users (email,password,createdAt,updatedAt,quote) VALUES
("Amica@berkeley.edu","$2a$10$J84GphQYgdvQ3lJEZaPPXenbvr9z./9GSxA4EAfCs4z5szgqTpit.","2018-09-15 23:30:23","2018-09-15 23:30:23", "C'est la vid"),
("David@berkeley.edu","$2a$10$37OHeWr3onhHOkn9vTPJBewDR22ZGX9ESCYWQckKjgQMMGp90PZim","2018-09-15 23:30:23","2018-09-15 23:30:23","C'est la vid"),
("Chris@berkeley.edu","$2a$10$9PZ1B1Jg.rBsaQa2Wrsf.untcbH3jBxWUl73QaukvYga4db5dSb0a","2018-09-15 23:30:23","2018-09-15 23:30:23","C'est la vid"),
("Brogan@berkeley.edu","$2a$10$jK/3ZXoPtnNvnS7HGnUvpO2YQCKFiCrH1sllTziDV8uN6HVDGdCPG","2018-09-15 23:30:23","2018-09-15 23:30:23","C'est la vid"),
("isaac@berkeley.edu","$2a$10$XWfxoGfYFakNy9LttmjJUu157m.yXLOEtsWjpI18ieZIoNCARjXOW","2018-09-15 23:30:23","2018-09-15 23:30:23","C'est la vid");

INSERT INTO challenges (gameId, challengerId, ToBeChallengeId,createdAt,updatedAt,post) 
VALUES (1,1,2,"2018-09-15 23:30:23","2018-09-15 23:30:23","What up dude?!"),
(5,2,3,"2018-09-15 23:30:23","2018-09-15 23:30:23","You can beat me."),
(3,3,1,"2018-09-15 23:30:23","2018-09-15 23:30:23","You are trash."),
(2,1,2,"2018-09-15 23:30:23","2018-09-15 23:30:23","Are you even trying."),
(1,2,1,"2018-09-15 23:30:23","2018-09-15 23:30:23","Your game skills are trash.");

INSERT INTO scores (gameScore, userId, gameId,createdAt,updatedAt) 
VALUES (8,2,1,"2018-09-15 23:30:23","2018-09-15 23:30:23"),
(2,1,2,"2018-09-15 23:30:23","2018-09-15 23:30:23"),
(5,3,3,"2018-09-15 23:30:23","2018-09-15 23:30:23"),
(6,1,4,"2018-09-15 23:30:23","2018-09-15 23:30:23"),
(6,1,1,"2018-09-15 23:30:23","2018-09-15 23:30:23");