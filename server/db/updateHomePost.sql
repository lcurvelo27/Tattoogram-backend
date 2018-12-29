TRUNCATE TABLE weekly_post;

INSERT INTO weekly_post
(artistid, firstname, lastname, profilepicture, about, images)
values (${artistid}, ${firstname}, ${lastname}, ${profilepicture}, ${about}, ${images})