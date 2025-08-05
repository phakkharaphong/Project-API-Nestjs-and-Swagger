import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { doh_course_type } from '../../doh_course_type/entities/course_type.entity'
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'

@Entity({ name: 'doh_Attached_Documentation' })
export class doh_Attached_Documentation {
  @ApiProperty({
    description: 'Id Reference Documention',
    example: 'TEST001',
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
    description: 'course_type_id Reference Table course_type',
    example: 'TEST001',
    type: 'string',
    maxLength: 50,
  })
  @ApiProperty({
    description: 'attached_documentation Path file',
    example: 'path/test/png',
    type: 'string',
    maxLength: 150,
  })
  @Column({
    type: 'varchar',
    name: 'attached_documentation',
    nullable: false,
  })
  attached_documentation: string

  @ApiProperty({
    description: 'is_active',
    example: 'status',
    type: 'boolean',
    default: true,
  })
  @Column({
    type: 'boolean',
    name: 'is_active',
    nullable: true,
  })
  is_active: boolean

  @ApiProperty({
    description: 'created_by',
    example: 'Created By ',
    type: 'string',
    default: true,
    maxLength: 50,
  })
  @Column({
    type: 'varchar',
    name: 'created_by',
    nullable: true,
  })
  created_by: string

  @ApiProperty({
    description: 'created_at',
    example: '25/08/2545',
  })
  @Column({
    type: 'timestamp',
    name: 'created_at',
  })
  created_at: Date

  @ApiProperty({
    description: 'updated_by',
    example: '25/08/2545',
    type: 'string',
    maximum: 50,
  })
  @Column({
    type: 'varchar',
    name: 'updated_by',
    nullable: true,
  })
  updated_by: string

  @ApiProperty({
    description: 'updated_at',
    example: '25/08/2545',
  })
  @Column({
    type: 'timestamp',
    name: 'updated_at',
    nullable: true,
  })
  updated_at: Date

  @ApiProperty({
    description: 'associated doh_course_type',
    type: () => doh_course_type,
  })
  @ManyToOne(
    () => doh_course_type,
    (course_type) => course_type.attached_documentation,
  )
  course_type_id: doh_course_type[]
}
