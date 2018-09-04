SELECT * FROM users as U 

JOIN workInfo as w on U.id = w.artistid

WHERE U.username = ${username}