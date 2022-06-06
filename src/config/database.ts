import { Knex } from 'knex';

export type DB_CONFIG = 'intranet' | 'localhost';

const config: Record<DB_CONFIG, Knex.MySql2ConnectionConfig> = {
    intranet: {
        host: process.env.MYSQL_INTRANET_HOST,
        database: process.env.MYSQL_INTRANET_DB,
        user: process.env.MYSQL_INTRANET_USER,
        password: process.env.MYSQL_INTRANET_PWD,
        decimalNumbers: true,
    },

    localhost: {
        host: 'localhost',
        database: 'teste',
        user: 'rodolfo',
        password: '123',
        decimalNumbers: true,
    },
};
export default config;
