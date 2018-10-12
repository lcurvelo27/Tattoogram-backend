UPDATE workInfo 
SET location = ${location},
    about = ${about},
    email = ${email},
    role = ${role}


WHERE artistid = ${artistid}

RETURNING * 