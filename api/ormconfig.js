const { resolve } = require('path')

require('dotenv').config()

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'pi2',
  entities: [__dirname + '/src/infra/repos/postgres/entities/*.ts'],
  migrations: [__dirname +'/src/infra/repos/postgres/migrations/*.ts'],
  cli: {
    migrationsDir: './src/infra/repos/postgres/migrations/'
  },
  synchronize: true
}
