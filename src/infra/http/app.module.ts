import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { AppService } from '../../app.service';
import { DatabaseModule } from '../database/database.modules';
import { SendNotification } from 'src/application/use-cases/send-notification';



@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [AppService, SendNotification],
})
export class AppModule {}
