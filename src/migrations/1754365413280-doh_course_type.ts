import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class DohCourseType1754365413280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doh_course_type',
        columns: [
          {
            name: 'id',
            type: 'varchar(50)',
            isPrimary: true,
          },
          {
            name: 'course_type__name',
            type: 'varchar(150)',
          },
          {
            name: 'responsibility',
            type: 'int',
          },
          {
            name: 'note',
            type: 'text',
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
      true,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doh_course_type')
  }
}
