import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createSubjectsTable1700528371817 implements MigrationInterface {

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'subjects',
            columns: [
              {
                name: 'id',
                type: 'serial',
                isPrimary: true
              },
              {
                name: 'name',
                type: 'varchar'
              }
            ]
          })
        )
      }
    
      public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subjects')
      }

}
