import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";
import { CreateForeignKey } from "../helpers";

export class addFkSubjectToQuestion1700528457724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('questions', new TableColumn({
            name: 'subject',
            type: 'int'
        }))
        const fk = new CreateForeignKey('subject', 'id', 'subjects', true, true).new()
        await queryRunner.createForeignKey('questions', fk)
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('questions', 'subject')
    }

}
