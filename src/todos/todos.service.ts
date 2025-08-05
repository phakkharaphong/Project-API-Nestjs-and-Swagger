import { Injectable } from '@nestjs/common'
import { UpdateTodoDto, CreateTodoDto, GetDto } from './dto'
import { Todo } from './entities/todo.entity'
import { TodoRepository } from './todos.repository'

@Injectable()
export class TodosService {
  constructor(private readonly todoRepository: TodoRepository) {}

  //Create
  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = <Todo>{
      ...createTodoDto,
      id: createTodoDto.id,
      conten: createTodoDto.conten,
    }
    return this.todoRepository.create(todo)
  }

  findAll() {
    return this.todoRepository.findAll()
  }

  //Fine Record By Id
  async findOne(id: string): Promise<Todo | null> {
    return this.todoRepository.getById(id)
  }

  //Update Date
  update(id: string, UpdateTodoDto: UpdateTodoDto): Promise<Todo | null> {
    const todo = <Todo>{
      ...UpdateTodoDto,
      conten: UpdateTodoDto.conten,
    }
    return this.todoRepository.updateForId(id, todo)
  }

  //Delet
  remove(id: string) {
    return this.todoRepository.removeByid(id)
  }
}
