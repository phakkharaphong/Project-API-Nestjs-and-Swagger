import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTabledohAttachedDocumentation1754383396056
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doh_attached_documentation',
        columns: [
          {
            name: 'id',
            type: 'varchar(50)',
            isPrimary: true,
          },
          {
            name: 'course_type_id',
            type: 'varchar(50)',
          },
          {
            name: 'attached_documentation',
            type: 'varchar(150)',
          },
          {
            name: 'is_active',
            type: 'boolean',
            default: true,
          },
          {
            name: 'created_by',
            type: 'varchar(150)',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_by',
            type: 'varchar(150)',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doh_central_examination_documents')
  }
}
