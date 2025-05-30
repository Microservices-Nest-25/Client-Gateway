import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './common';

async function bootstrap() {
  const loggerr = new Logger('Main-Geatway');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  app.useGlobalFilters(
    new RpcCustomExceptionFilter()
  )

  // app.useGlobalInterceptors(new RpcExceptionInterceptor());

  await app.listen( envs.port );

  loggerr.log(`Getway running on port: ${ envs.port }`);
}
bootstrap();
