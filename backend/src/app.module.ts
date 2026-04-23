import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { SelfModule } from './self/self.module';
import { HealthModule } from './health/health.module';
import { MindModule } from './mind/mind.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FoodModule } from './food/food.module';
import { CommerceModule } from './commerce/commerce.module';
import { ProductivityModule } from './productivity/productivity.module';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, SelfModule, HealthModule, MindModule, NotificationsModule, FoodModule, CommerceModule, ProductivityModule, CommunityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
