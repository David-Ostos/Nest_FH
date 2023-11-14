import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap () {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo deja la data que se esta esperando
      forbidNonWhitelisted: true // le manda un mensaje de error con la data que no es requerida
    })
  );

  const server = await app.listen(3000);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  server;
  console.log(`http://localhost:${server.address().port}}`);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
