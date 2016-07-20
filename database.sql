
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


INSERT INTO people (first_name, last_name, patronus_id)
VALUES ('Henry','Haggar',1);

INSERT INTO people (first_name, last_name, patronus_id)
VALUES ('Taylor','Kabe',2);

INSERT INTO people (first_name, last_name, patronus_id)
VALUES ('Rupert','Blu',3);

INSERT INTO people (first_name, last_name, patronus_id)
VALUES ('Lala','Lark', 4);

INSERT INTO people (first_name, last_name, patronus_id)
VALUES ('Mikki','Ray', 5);


INSERT INTO people (first_name, last_name, patronus_id)
VALUES ('Nikki','Button',6);

INSERT INTO people (first_name, last_name, patronus_id)
VALUES ('Leblane','Jones',2);
