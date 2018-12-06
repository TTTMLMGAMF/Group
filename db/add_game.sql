INSERT INTO game (game_name, image, subject, sub_subject, account_id)
VALUES(
    $1, $2, $3, $4, $5
)
RETURNING *;