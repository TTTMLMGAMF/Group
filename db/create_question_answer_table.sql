create table question_answer (
question_answer_id serial primary key,
question varchar(400),
answer varchar(400),
category varchar(50),
points integer,
game_id integer REFERENCES game(game_id)
)