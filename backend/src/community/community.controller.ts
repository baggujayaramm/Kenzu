import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { CommunityService } from './community.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('api/community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Get('circles')
  async getCircles(@Request() req: any) {
    return this.communityService.getCircles(req.user.userId);
  }

  @Get('events')
  async getEvents(@Request() req: any) {
    return this.communityService.getEvents(req.user.userId);
  }

  @Get('mentors')
  async getMentors(@Request() req: any) {
    return this.communityService.getMentors(req.user.userId);
  }
}
