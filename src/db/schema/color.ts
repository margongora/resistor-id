import {
	integer,
	numeric,
	pgTable,
	serial,
} from 'drizzle-orm/pg-core';

export const ColorTable = pgTable(
	'colors', {
		id: serial('id').primaryKey(),	
		digit: integer('digit').notNull(),
		multiplier: numeric('multiplier'),
		tolerance: numeric('tolerance'),
		temp_coeff: integer('temp_coeff')
	},
)