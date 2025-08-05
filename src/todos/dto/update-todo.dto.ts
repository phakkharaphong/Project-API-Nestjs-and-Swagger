import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateTodoDto } from './create-todo.dto'
import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateTodoDto {
  @ApiProperty({
    description: 'conten',
    example: '',
  })
  conten: string
}
