DELETE FROM question_answer
WHERE game_id = $1;
DELETE FROM game
WHERE game_id = $1;