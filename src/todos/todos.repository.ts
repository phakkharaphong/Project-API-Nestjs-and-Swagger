import { Injectable } from '@nestjs/common'
import { Todo } from './entities/todo.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, Repository } from 'typeorm'

@Injectable()
export class TodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>,
    private readonly dataSource: DataSource,
  ) {}

  async create(input: Todo): Promise<Todo> {
    return await this.todoRepo.save(input)
  }

  //getById
  async getById(id: string): Promise<Todo | null> {
    return this.todoRepo.findOneBy({ id })
  }

  //Delete Record By id
  async removeByid(id: string): Promise<Todo | null> {
    const deletedata = this.todoRepo.findOneBy({ id })
    await this.todoRepo.delete(id)
    return deletedata
  }

  //Update
  async updateForId(id: string, input: Todo): Promise<Todo | null> {
    const fineId = this.todoRepo.findOneBy({ id })
    await this.todoRepo.update(id, input)
    return fineId
  }

  async findAll(): Promise<Todo[]> {
    const findalldata = this.todoRepo.find()
    return findalldata
  }
  //Update Record By id
  /*async updateByid(id: string, input: Todo): Promise<Todo | null>{
    const updateDataByid = this.todoRepo.findOneBy({ id })
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if (!updateDataByid) {
      console.log('Data Emty')
    }
  }*/
}
