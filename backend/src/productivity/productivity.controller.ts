import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ProductivityService } from './productivity.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('api/productivity')
export class ProductivityController {
  constructor(private readonly productivityService: ProductivityService) {}

  @Get('timeline')
  async getTimeline(@Request() req: any) {
    return this.productivityService.getTimeline(req.user.userId);
  }

  @Get('finance')
  async getFinanceOverview(@Request() req: any) {
    return this.productivityService.getFinanceOverview(req.user.userId);
  }
}
