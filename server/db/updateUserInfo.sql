UPDATE users 
SET firstname = ${firstname},
    lastname = ${lastname},
    username = ${username},
    profilepicture = ${profilepicture}

WHERE id = ${id}

RETURNING * 