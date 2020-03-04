import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('uploads', {
    prefix: '/uploads',
  })
  const PORT = process.env.SERVER_PORT || 3002
  const swaggerPath = 'api-doc'

  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('IbbPress 博客接口文档')
    .setDescription('The IbbPress API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(PORT);
  console.log('');
  console.log('----------------');
  console.log('App running at:');
  console.log(`- App:     http://localhost:${PORT}`);
  console.log(`- Swagger: http://localhost:${PORT}/${swaggerPath}`);
  console.log('----------------');
  console.log('');
}
bootstrap();
