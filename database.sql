CREATE TABLE "public"."adjectives" (
    "ID" serial NOT NULL,
    "name" varchar(255),
    PRIMARY KEY ("ID")
);

INSERT INTO "public"."adjectives"("name") VALUES('sparkly') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('lanky') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('flaming') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('rainbow') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('joyful') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('bubbly') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('dapper') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('gothic') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('smelly') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('verbose') RETURNING "ID", "name";
INSERT INTO "public"."adjectives"("name") VALUES('moist') RETURNING "ID", "name";

CREATE TABLE "public"."nouns" (
    "ID" serial NOT NULL,
    "name" varchar(255),
    PRIMARY KEY ("ID")
);

INSERT INTO "public"."nouns"("name") VALUES('shrub') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('cheetah') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('walrus') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('narwhal') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('dragon') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('sloth') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('capybara') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('unicorn') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('raptor') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('nyancat') RETURNING "ID", "name";
INSERT INTO "public"."nouns"("name") VALUES('spider') RETURNING "ID", "name";
