import { DynamicModule, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { central_docService } from './central_examination_documents.service'
import { cecntral_docRepository } from './central_examination_documents.repository'
import { central_docController } from './central_examination_documents.controller'

@Module({})
export class central_docModule {
  static forRoot(enable: boolean): DynamicModule {
    if (enable) {
      return {
        module: central_docModule,
        imports: [TypeOrmModule.forFeature([])],
        providers: [central_docService, cecntral_docRepository],
        controllers: [central_docController],
      }
    }

    return {
      module: central_docModule,
    }
  }
}
