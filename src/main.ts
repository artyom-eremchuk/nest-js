import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ServerConfig, ServerConfigName } from './config/server.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const serverConfig = configService.getOrThrow<ServerConfig>(ServerConfigName);

  await app.listen(serverConfig.port);
}
bootstrap();
