
CREATE TABLE patronuses
(
	patronus_id serial PRIMARY KEY,
	patronus_name VARCHAR(35)

);

CREATE TABLE people
(
	person_id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(20),
	patronus_id integer REFERENCES patronuses(patronus_id)
);

INSERT INTO patronuses (patronus_name)
VALUES ('Penguin');

INSERT INTO patronuses (patronus_name)
VALUES ('Puffin');

INSERT INTO patronuses (patronus_name)
VALUES ('Bear');

INSERT INTO patronuses (patronus_name)
VALUES ('Badger');

INSERT INTO patronuses (patronus_name)
VALUES ('Ostrich');

INSERT INTO patronuses (patronus_name)
VALUES ('Emu');
