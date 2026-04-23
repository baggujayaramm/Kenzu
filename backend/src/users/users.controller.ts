import { Controller, Get, Put, Body, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.getProfile(req.user.userId);
  }

  @Put('profile')
  updateProfile(@Request() req, @Body() data) {
    return this.usersService.createOrUpdateProfile(req.user.userId, data);
  }

  @Put('settings')
  updateSettings(@Request() req, @Body() data) {
    return this.usersService.updateSettings(req.user.userId, data);
  }
}
