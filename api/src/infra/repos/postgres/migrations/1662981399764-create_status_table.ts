import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createStatusTable1662981399764 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'status',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'status',
            type: 'varchar'
          }
        ]
      })
    )

    await queryRunner.query("INSERT INTO status (id, status) VALUES (1, 'Em validação')")
    await queryRunner.query("INSERT INTO status (id, status) VALUES (2, 'Aceita')")
    await queryRunner.query("INSERT INTO status (id, status) VALUES (3, 'Não aceita')")
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status')
  }
}
