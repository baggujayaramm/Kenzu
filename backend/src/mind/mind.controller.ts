import { Controller, Get, UseGuards } from '@nestjs/common';
import { MindService } from './mind.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('mind')
export class MindController {
  constructor(private mindService: MindService) {}

  @Get('sessions')
  getLibrary() {
    return this.mindService.getMeditations();
  }
}
