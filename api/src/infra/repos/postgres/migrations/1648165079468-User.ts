import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class User1648165079468 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        uniques: [
          {
            name: 'email',
            columnNames: ['email']
          }
        ]
      })
    )
    // 12345678
    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (1, 'user teste 1', 'userteste1@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")

    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (2, 'user teste 2', 'userteste2@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")

    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (3, 'user teste 3', 'userteste3@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")

    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (4, 'user teste 4', 'userteste4@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")

    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (5, 'user teste 5', 'userteste5@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")

    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (6, 'user teste 6', 'userteste6@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")

    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (7, 'user teste 7', 'userteste7@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")

    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (8, 'user teste 8', 'userteste8@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")

    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (9, 'user teste 9', 'userteste9@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")

    await queryRunner.query("INSERT INTO users (id, name, email, password) VALUES (10, 'user teste 10', 'userteste10@gmail.com', '$2b$12$fnEcW/7MYucAx7oBASnp1.NCaHT5gzNM61D6GjsTKpEkzeWQX21r.')")
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
