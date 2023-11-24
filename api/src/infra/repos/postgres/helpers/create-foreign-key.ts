import { TableForeignKey } from 'typeorm'

export class CreateForeignKey {
  constructor (
    private readonly column: string,
    private readonly refColumn: string,
    private readonly refTable: string,
    private readonly cascadeDelete: boolean = false,
    private readonly cascadeUpdate: boolean = false
  ) {}

  new (): TableForeignKey {
    return new TableForeignKey({
      columnNames: [this.column],
      referencedColumnNames: [this.refColumn],
      referencedTableName: this.refTable,
      onDelete: this.cascadeDelete ? 'CASCADE' : 'NO ACTION',
      onUpdate: this.cascadeUpdate ? 'CASCADE' : 'NO ACTION'
    })
  }
}
