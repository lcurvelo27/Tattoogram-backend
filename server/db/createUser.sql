WITH insertUser AS (
    INSERT INTO users 
    (authid)
    VALUES
    (${authid})

    RETURNING id;
)
INSERT INTO workinfo
(artistid)
VALUES
(id)

RETURNING *

