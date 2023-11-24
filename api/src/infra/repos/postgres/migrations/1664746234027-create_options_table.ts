import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import { CreateForeignKey } from '../helpers'

export class createOptionsTable1664746234027 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'options',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'option',
            type: 'varchar'
          },
          {
            name: 'correct',
            type: 'boolean',
            default: false
          },
          {
            name: 'question',
            type: 'int'
          }
        ]
      })
    )
    const questionForeignKey = new CreateForeignKey('question', 'id', 'questions', true, true).new()
    await queryRunner.createForeignKey('options', questionForeignKey)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('options')
  }
}
