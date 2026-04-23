import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { CommerceService } from './commerce.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('api/commerce')
export class CommerceController {
  constructor(private readonly commerceService: CommerceService) {}

  @Get('feed')
  async getFeed(@Request() req: any) {
    return this.commerceService.getCuratedFeed(req.user.userId);
  }

  @Get('subscriptions')
  async getSubscriptions(@Request() req: any) {
    return this.commerceService.getSubscriptions(req.user.userId);
  }

  @Post('subscriptions')
  async addSubscription(@Request() req: any, @Body() data: any) {
    return this.commerceService.addSubscription(req.user.userId, data);
  }
}
