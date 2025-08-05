import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

export class CreateForeignKeyTodohCentralExaminationDocuments1754382766114
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'doh_central_examination_documents',
      new TableForeignKey({
        columnNames: ['course_type_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'doh_course_type',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    /*const table = await queryRunner.getTable(
      'doh_central_examination_documents',
    )*/
    //const foreikey = table?.foreignKeys.find(table)
    //await queryRunner.dropForeignKey('doh_central_examination_documents', table)
  }
}
