import { Body, Controller, Get, Post } from '@nestjs/common';
import { createNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-cases/send-notification';

@Controller('notifications')
export class NotificationsController {
  constructor( private sendNotification: SendNotification){}


  @Post()
     async create(@Body() body: createNotificationBody) {
      const {recipientId, category, content}= body;

      const {notification} = await this.sendNotification.execute({
        recipientId,
        content,
        category
      })

      return {
        notification
      }
  }
}