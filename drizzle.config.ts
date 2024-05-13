import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config();

export default defineConfig({
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.POSTGRES_URL!   
    },
    schema: './src/db/schema/*.ts'

})