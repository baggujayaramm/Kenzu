import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  async getRecommendations(userId: string) {
    // Mock recommendations for now. Will integrate Swiggy/Zomato APIs later.
    return [
      { id: 'm1', title: 'Grilled Chicken Salad', vendor: 'FitBowl', calories: 350, type: 'diet' },
      { id: 'm2', title: 'Avocado Toast', vendor: 'Green Cafe', calories: 250, type: 'light' },
      { id: 'm3', title: 'Salmon Sushi Roll', vendor: 'SushiX', calories: 420, type: 'balanced' },
    ];
  }

  async setMacros(userId: string, macros: { protein: number; carbs: number; fats: number; calories: number }) {
    // Saving to user profile lifestyle/settings json
    const profile = await this.prisma.userProfile.findUnique({ where: { userId } });
    
    let lifestyle = profile?.lifestyle ? (profile.lifestyle as Record<string, any>) : {};
    lifestyle.macros = macros;
    
    return this.prisma.userProfile.upsert({
      where: { userId },
      update: { lifestyle },
      create: { userId, lifestyle },
    });
  }

  async getMacros(userId: string) {
    const profile = await this.prisma.userProfile.findUnique({ where: { userId } });
    const lifestyle = profile?.lifestyle ? (profile.lifestyle as Record<string, any>) : {};
    return lifestyle.macros || { protein: 150, carbs: 200, fats: 60, calories: 2000 };
  }
}
