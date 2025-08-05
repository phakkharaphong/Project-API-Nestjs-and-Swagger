import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

export class CreateForeignKeyTodohAttachedDocumentation1754384525139
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'doh_attached_documentation',
      new TableForeignKey({
        columnNames: ['course_type_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'doh_course_type',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //body
  }
}
