INSERT INTO question_answer (game_id, category, category_num, question, answer, points)
VALUES 
($1, $2, $3, $4, $5, 100),
($1, $2, $3, $6, $7, 200),
($1, $2, $3, $8, $9, 300),
($1, $2, $3, $10, $11, 400),
($1, $2, $3, $12, $13, 500)
RETURNING *;