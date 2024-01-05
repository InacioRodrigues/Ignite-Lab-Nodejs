import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { AppService } from '../../app.service';



@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [AppService],
})
export class AppModule {}
