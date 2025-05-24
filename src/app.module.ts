import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPagesModule } from './top-page/top-pages.module';

import { ReviewModule } from './review/review.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from './schedule/schedule.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'./env'
    }),
    AuthModule, 
    TopPagesModule, 
    ReviewModule, 
    ProductModule, ScheduleModule, RoomsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
