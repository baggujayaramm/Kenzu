import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/api/waitlist')
  async joinWaitlist(@Body('email') email: string) {
    await this.appService.joinWaitlist(email);
    return { success: true, message: 'Joined waitlist' };
  }
}
