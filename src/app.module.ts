import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configs } from '@/configs';
import { CONFIG } from '@/constants';
import { modules } from '@/modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${
        process.env.NODE_ENV || CONFIG.NODE_ENV.DEVELOPMENT
      }`,
      load: configs,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get(CONFIG.DB),
      inject: [ConfigService],
    }),
    ...modules,
  ],
  controllers: [],
  providers: [Logger],
})
export class AppModule {}
