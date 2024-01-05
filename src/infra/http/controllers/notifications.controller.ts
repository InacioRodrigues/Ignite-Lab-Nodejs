import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { createNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  @Post()
     async create(@Body() body: createNotificationBody) {
      const {recipientId, category, content}= body;
  }
}