import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateTodoDto {
  @ApiProperty({
    description: 'id',
    example: 'T001',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  id: string

  @ApiProperty({
    description: 'conten',
    example: 'Nuy',
  })
  conten: string
}
