SELECT  COALESCE(firstname, '') as firstname,
        COALESCE(lastname, '') as lastname,
        COALESCE(username, '') as username, 
        COALESCE(profilepicture, '') as profilepicture 
        
FROM users
WHERE id = ${id}