import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { CreateTodoDto, GetDto, UpdateTodoDto } from './todos/dto'
import { Todo } from './todos/entities/todo.entity'
import { doh_course_type } from './doh_course_type/entities/course_type.entity'
import { doh_central_examination_documents } from './doh_central_examination_documents/entities/central_examination_document.entity'
import { doh_Attached_Documentation } from './doh_central_examination_documents/entities/attached_documentation.entity'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('API Document Example By Nuy')
    .setVersion('1.0')
    .build()
  const documentFactory = () =>
    SwaggerModule.createDocument(app, config, {
      //Schemas
      extraModels: [
        CreateTodoDto,
        UpdateTodoDto,
        GetDto,
        Todo,
        doh_course_type,
        doh_central_examination_documents,
        doh_Attached_Documentation,
      ],
    })

  //Document UI
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: 'swagger/json',
    customSiteTitle: '📕 API Documentation',
    swaggerOptions: {},
  })

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
