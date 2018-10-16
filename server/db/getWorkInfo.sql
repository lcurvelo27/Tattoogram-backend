SELECT COALESCE(location, '') as location, COALESCE(about, '') as about, COALESCE(email, '') as email, COALESCE(role, '') as role  FROM workInfo
WHERE artistid = ${id}