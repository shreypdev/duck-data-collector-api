import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const operationIdFactory = (controllerKey: string, methodKey: string) =>
    `${methodKey}`;

  const options = new DocumentBuilder()
    .setTitle('Ryden API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    operationIdFactory,
  });
  SwaggerModule.setup('/', app, document);
}
