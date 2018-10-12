SELECT COALESCE(location, '') as location, COALESCE(about, '') as about, COALESCE(email, '') as email FROM workInfo
WHERE artistid = ${id}