import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { HealthService } from './health.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get('metrics')
  getMetrics(@Request() req: any) {
    return this.healthService.getMetricsSummary(req.user.userId);
  }

  @Post('sync')
  syncMetrics(@Request() req: any, @Body() data: any) {
    return this.healthService.syncMetrics(req.user.userId, data);
  }
}
