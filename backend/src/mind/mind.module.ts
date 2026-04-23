import { Module } from '@nestjs/common';
import { MindService } from './mind.service';
import { MindController } from './mind.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MindService],
  controllers: [MindController]
})
export class MindModule {}
