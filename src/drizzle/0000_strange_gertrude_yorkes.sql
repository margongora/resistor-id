CREATE TABLE IF NOT EXISTS "colors" (
	"id" serial PRIMARY KEY NOT NULL,
	"digit" integer NOT NULL,
	"multiplier" integer,
	"tolerance" integer,
	"temp_coeff" integer
);
