import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { createNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list(){
    return this.prisma.notification.findMany();
  }


  
  @Post()
     async create(@Body() body: createNotificationBody) {
      const {recipientId, category, content}= body;

      await this.prisma.notification.create({
        data: {
        id: randomUUID(),
        recipientId,
        content,
        category,
      }
     
     })
  }
}