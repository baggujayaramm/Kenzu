import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AIService } from '../ai/ai.service';

@Injectable()
export class SelfService {
  constructor(
    private prisma: PrismaService,
    private aiService: AIService
  ) {}

  async logMood(userId: string, data: { moodScore: number; moodLabel?: string; journalEntry?: string; tags?: string[] }) {
    return this.prisma.moodLog.create({
      data: {
        userId,
        ...data,
      },
    });
  }

  async getMoods(userId: string) {
    return this.prisma.moodLog.findMany({
      where: { userId },
      orderBy: { loggedAt: 'desc' },
    });
  }

  async getDailyBriefing(userId: string) {
    // 1. Check if we already have a briefing for today
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let briefing = await this.prisma.dailyBriefing.findUnique({
      where: {
        userId_date: {
          userId,
          date: today,
        }
      }
    });

    // 2. If not, generate one using AI
    if (!briefing) {
      briefing = await this.aiService.generateDailyBriefing(userId);
    }
    
    return {
      greeting: briefing.greeting,
      quote: briefing.quote,
      insight: briefing.insight,
      agenda: [], // To be populated from productivity module
      reminders: []
    };
  }
}
