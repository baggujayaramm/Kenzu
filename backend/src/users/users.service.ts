import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    return this.prisma.userProfile.findUnique({
      where: { userId },
      include: { user: true },
    });
  }

  async createOrUpdateProfile(userId: string, data: any) {
    return this.prisma.userProfile.upsert({
      where: { userId },
      update: data,
      create: { userId, ...data },
    });
  }

  async updateSettings(userId: string, data: any) {
    const { timezone, language, tier, name, ...profileData } = data;
    
    // Update User table if any user fields are present
    if (timezone || language || tier || name) {
      await this.prisma.user.update({
        where: { id: userId },
        data: { timezone, language, tier, name },
      });
    }

    // Update UserProfile table with the rest
    if (Object.keys(profileData).length > 0) {
      await this.prisma.userProfile.upsert({
        where: { userId },
        update: profileData,
        create: { userId, ...profileData },
      });
    }

    return this.getProfile(userId);
  }
}
