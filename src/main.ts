import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000
  const swaggerPath = 'api-doc'

  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('IbbPress 博客接口文档')
    .setDescription('The IbbPress API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port);
  console.log('');
  console.log('----------------');
  console.log('App running at:');
  console.log(`- App:     http://localhost:${port}`);
  console.log(`- Swagger: http://localhost:${port}/${swaggerPath}`);
  console.log('----------------');
  console.log('');
}
bootstrap();
