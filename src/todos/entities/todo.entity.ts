import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'todos' })
export class Todo {
  @ApiProperty({
    description: 'Id List Todos',
    example: 'T001',
    type: 'string',
    maxLength: 50,
  })
  @Column({
    type: 'varchar',
    name: 'id',
    nullable: false,
  })
  @IsNotEmpty()
  @PrimaryColumn()
  id: string

  @ApiProperty({
    description: 'conten',
    example: 'Test Contens',
    type: 'string',
    maxLength: 255,
  })
  @Column({
    type: 'varchar',
    name: 'conten',
    nullable: true,
  })
  conten: string
}
