import { ApiProperty } from '@nestjs/swagger'

export class GetDto {
  @ApiProperty({
    description: 'id',
    required: true,
    example: 'T001',
  })
  id: string
}
