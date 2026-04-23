import { Controller, Get, Post, Body, Param, Put, UseGuards, Request } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('api/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async getUserNotifications(@Request() req: any) {
    return this.notificationsService.getUserNotifications(req.user.userId);
  }

  @Put(':id/read')
  async markAsRead(@Param('id') id: string) {
    return this.notificationsService.markAsRead(id);
  }

  // Debug/test route to generate system notification
  @Post('test')
  async createTestNotification(@Request() req: any, @Body() body: any) {
    return this.notificationsService.createNotification({
      userId: req.user.userId,
      title: body.title || 'Welcome to Phase 2',
      body: body.body || 'Your notification engine is working.',
      type: body.type || 'system',
    });
  }
}
