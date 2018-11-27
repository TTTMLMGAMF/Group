create table game (
game_id serial primary key,
game_name VARCHAR(50),
image text,
subject varchar(50),
sub_subject varchar(50),
account_id integer REFERENCES account(account_id)
)