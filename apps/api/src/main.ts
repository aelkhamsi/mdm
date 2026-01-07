import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

// Load environment variables from .env file
dotenv.config({ path: ['.env'] });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const allowedOrigin = [process.env.FRONTEND_URL, process.env.ADMIN_URL];

  app.enableCors({ origin: allowedOrigin, credentials: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(process.env.API_PORT || 9000);
}
bootstrap();
