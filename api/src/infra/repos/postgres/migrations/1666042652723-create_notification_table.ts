import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import { CreateForeignKey } from '../helpers'

export class createNotificationTable1666042652723 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'notifications',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'user',
            type: 'int'
          },
          {
            name: 'question',
            type: 'int'
          },
          {
            name: 'evaluation',
            type: 'boolean',
            default: false
          },
          {
            name: 'answered',
            type: 'boolean',
            default: false
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
        ]
      })
    )
    const userForeignKey = new CreateForeignKey('user', 'id', 'users', true, true).new()
    const questionForeignKey = new CreateForeignKey('question', 'id', 'questions', true, true).new()
    await queryRunner.createForeignKeys('notifications', [userForeignKey, questionForeignKey])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('notifications')
    await queryRunner.dropForeignKeys(table!.name, table!.foreignKeys)
    await queryRunner.dropTable(table!.name)
  }
}
