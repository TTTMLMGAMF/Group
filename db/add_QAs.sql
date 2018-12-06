INSERT INTO question_answer (question, answer, category, points, game_id, category_num)
VALUES (
    $1, $2, $3, $4, $5, %6
)
RETURNING *;