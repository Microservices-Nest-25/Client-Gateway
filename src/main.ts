import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const loggerr = new Logger('Main-Geatway');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen( envs.port );

  loggerr.log(`Getway running on port: ${ envs.port }`);
}
bootstrap();
