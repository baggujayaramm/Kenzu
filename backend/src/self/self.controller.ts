import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { SelfService } from './self.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('self')
export class SelfController {
  constructor(private selfService: SelfService) {}

  @Get('briefing')
  getBriefing(@Request() req: any) {
    return this.selfService.getDailyBriefing(req.user.userId);
  }

  @Get('moods')
  getMoods(@Request() req: any) {
    return this.selfService.getMoods(req.user.userId);
  }

  @Post('moods')
  logMood(@Request() req: any, @Body() data: any) {
    return this.selfService.logMood(req.user.userId, data);
  }
}
