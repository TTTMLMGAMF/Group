SELECT * FROM game
WHERE game_id = $1;
SELECT * FROM question_answer
WHERE game_id = $1;