import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { doh_central_examination_documents } from '../../doh_central_examination_documents/entities/central_examination_document.entity'
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { doh_Attached_Documentation } from '../../doh_central_examination_documents/entities/attached_documentation.entity'

@Entity({ name: 'doh_course_type' })
export class doh_course_type {
  @ApiProperty({
    description: 'Id Reference course type',
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
    description: 'Course Type Name',
    example: 'Name Test',
    type: 'string',
    maxLength: 150,
  })
  @Column({
    type: 'varchar',
    name: 'course_type__name',
    nullable: true,
  })
  course_type__name: string

  @ApiProperty({
    description: 'responsibility',
    example: '1',
    type: 'integer',
    maxLength: 150,
  })
  @Column({
    type: 'int',
    name: 'responsibility',
    nullable: true,
  })
  responsibility: number

  @ApiProperty({
    description: 'note',
    example: 'Note For Test',
    type: 'string',
  })
  @Column({
    type: 'text',
    name: 'responsibility',
    nullable: true,
  })
  note: string

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
    description: 'associated doh_central_examination_documents',
    type: () => [doh_central_examination_documents],
  })
  @OneToMany(
    () => doh_central_examination_documents,
    (central_doc) => central_doc.course_type_id,
  )
  central_examination_documents: doh_central_examination_documents[]

  @ApiProperty({
    description: 'associated doh_Attached_Documentation',
    type: () => [doh_Attached_Documentation],
  })
  @OneToMany(
    () => doh_Attached_Documentation,
    (Attached_doc) => Attached_doc.course_type_id,
  )
  attached_documentation: doh_Attached_Documentation[]
}
