UPDATE workInfo 
SET location = ${location},
    about = ${about}

WHERE artistid = 1

RETURNING * 