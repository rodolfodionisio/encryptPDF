import knex, { Knex } from 'knex';
import databaseConfig, { DB_CONFIG } from '@config/database';

const _connections = {} as Record<DB_CONFIG, any>;

export const SQL = {
    getConn(config: DB_CONFIG): Knex {
        if (!(config in databaseConfig)) {
            throw new Error('Parameter config is required for connection.');
        }

        if (!_connections[config]) {
            _connections[config] = knex({
                client: 'mysql2',
                connection: databaseConfig[config],
            });
        }
        return _connections[config];
    },
    raw: knex({ client: 'mysql2' }),
};
