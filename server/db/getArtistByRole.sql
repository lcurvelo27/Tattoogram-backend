SELECT 
  U.username,
  U.firstname,
  U.lastname,
  U.profilepicture,
  COALESCE(images.url, '[]') AS url 
FROM
  users U 
  FULL JOIN (
    SELECT 
      i.artistid,
      json_agg(
        (
          SELECT 
            x
          FROM(
              SELECT 
                I.url
            ) x
        )
      ) AS url

    FROM
      images i
    GROUP BY
      I.artistid
    
  ) AS images ON images.artistid = U.id 

  JOIN workinfo AS w ON w.artistid = u.id
  
  WHERE w.role = ${role}
  
  