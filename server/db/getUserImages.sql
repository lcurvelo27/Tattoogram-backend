SELECT I.url, I.description FROM users as U 

JOIN images as I on U.id = I.artistid

WHERE U.username = ${username}