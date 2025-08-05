import { DynamicModule, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { doh_course_type } from './entities/course_type.entity'
import { course_typeController } from './course_type.controller'
import { course_typeRepository } from './course_type.repository'
import { course_typeService } from './course_type.service'

@Module({})
export class course_typeModule {
  static forRoot(enable: boolean): DynamicModule {
    if (enable) {
      return {
        module: course_typeModule,
        imports: [TypeOrmModule.forFeature([doh_course_type])],
        providers: [course_typeService, course_typeRepository],
        controllers: [course_typeController],
      }
    }

    return {
      module: course_typeModule,
    }
  }
}
