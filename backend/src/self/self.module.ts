import { Module } from '@nestjs/common';
import { SelfService } from './self.service';
import { SelfController } from './self.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AIModule } from '../ai/ai.module';

@Module({
  imports: [PrismaModule, AIModule],
  providers: [SelfService],
  controllers: [SelfController]
})
export class SelfModule {}
