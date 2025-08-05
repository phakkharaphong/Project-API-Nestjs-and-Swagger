import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Todos1754371458955 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'todos',
        columns: [
          {
            name: 'id',
            type: 'varchar(50)',
            isPrimary: true,
          },
          {
            name: 'conten',
            type: 'varchar(255)',
          },
        ],
      }),
      true,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('todos')
  }
}
