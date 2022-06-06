import 'dotenv/config';
import path from 'path';
import { Knex } from 'knex';

const root = (p: string) => path.join(__dirname, 'database/mysql', p);

const config: Knex.Config = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: Number(3306),
        user: 'rodolfo',
        password: '123',
        database: 'teste',
        bigNumberStrings: false,
    },
    pool: { max: 2 },
    migrations: {
        directory: root('migrations'),
        extension: 'ts',
        stub: root('migration.stub.ts'),
    },
    seeds: {
        directory: root('seeds'),
        extension: 'ts',
        timestampFilenamePrefix: true,
    },
};
export default config;
