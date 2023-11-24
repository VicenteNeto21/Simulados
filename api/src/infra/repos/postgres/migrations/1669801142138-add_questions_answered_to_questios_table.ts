import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class addQuestionsAnsweredToQuestiosTable1669801142138 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('questions', [
      new TableColumn({
        name: 'denunciation',
        type: 'boolean',
        default: false

      })])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('questions', 'denunciation')
  }
}
