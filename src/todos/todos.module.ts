import { DynamicModule, Module } from '@nestjs/common'
import { TodosService } from './todos.service'
import { TodosController } from './todos.controller'
import { TodoRepository } from './todos.repository'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todo } from './entities/todo.entity'
@Module({})
export class TodosModule {
  static forRoot(enable: boolean): DynamicModule {
    if (enable) {
      return {
        module: TodosModule,
        imports: [TypeOrmModule.forFeature([Todo])],
        providers: [TodosService, TodoRepository],
        controllers: [TodosController],
      }
    }

    return {
      module: TodosModule,
    }
  }
}
