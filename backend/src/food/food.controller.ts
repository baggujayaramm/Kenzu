import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { FoodService } from './food.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('api/food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get('recommendations')
  async getRecommendations(@Request() req: any) {
    return this.foodService.getRecommendations(req.user.userId);
  }

  @Get('macros')
  async getMacros(@Request() req: any) {
    return this.foodService.getMacros(req.user.userId);
  }

  @Post('macros')
  async setMacros(@Request() req: any, @Body() body: any) {
    return this.foodService.setMacros(req.user.userId, body);
  }
}
