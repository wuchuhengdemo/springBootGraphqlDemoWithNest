import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BannerController } from './controller/banner/banner.controller';

@Module({
  imports: [],
  controllers: [AppController, BannerController],
  providers: [AppService],
})
export class AppModule {}
