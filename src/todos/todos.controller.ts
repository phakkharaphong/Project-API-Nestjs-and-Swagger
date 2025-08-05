import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { TodosService } from './todos.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('todos')
@ApiTags('Todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @ApiOperation({
    summary: 'Create todo',
    description: 'Create a new todos',
  })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    if (!createTodoDto.id) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    } else {
      console.log('Result', createTodoDto)
      return this.todosService.create(createTodoDto)
    }
  }

  @ApiOperation({
    summary: 'Get ALL Data ',
    description: 'Get ALL Data',
  })
  @Get()
  findAll() {
    return this.todosService.findAll()
  }

  @ApiOperation({
    summary: 'Get Data By ID',
    description: 'Get Data By ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id)
  }

  @ApiOperation({
    summary: 'Update Data By ID',
    description: 'Update Data By ID',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto)
  }

  @ApiOperation({
    summary: 'Delte Data By ID',
    description: 'Delte Data By ID',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(id)
  }
}
