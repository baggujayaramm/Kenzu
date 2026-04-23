import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AIService {
  constructor(private readonly prisma: PrismaService) {}

  async generateDailyBriefing(userId: string) {
    // 1. Fetch deep context for personalization
    const profile = await this.prisma.userProfile.findUnique({
      where: { userId },
      include: { user: true },
    });

    const recentHealth = await this.prisma.healthMetric.findMany({
      where: { userId },
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    const recentMood = await this.prisma.moodLog.findMany({
      where: { userId },
      take: 3,
      orderBy: { loggedAt: 'desc' },
    });

    // 2. Construct the system prompt
    const prompt = `
      You are Kenzu AI, a personal coach for elite individuals.
      Generate a morning briefing for ${profile?.user.name}.
      
      User Goals: ${profile?.fitnessGoal || 'General Wellness'}
      Diet: ${profile?.dietType || 'Omnivore'}
      Recent Mood: ${recentMood[0]?.moodLabel || 'Neutral'}
      Recent Activity: ${recentHealth.map(h => `${h.metricType}: ${h.value}`).join(', ')}
      
      Requirements:
      - Greeting: Warm but professional.
      - Quote: One short, powerful sentence.
      - Insight: A 2-sentence actionable advice based on their data.
    `;

    // 3. Simulated AI call (In production, use Gemini/OpenAI API here)
    // const response = await this.callGemini(prompt);
    
    const simulatedResponse = {
      greeting: `Good morning, ${profile?.user.name.split(' ')[0]}. Your sanctuary is ready.`,
      quote: "Quality is not an act, it is a habit.",
      insight: `Based on your recent ${recentMood[0]?.moodLabel || 'neutral'} mood, try 5 minutes of box breathing today. Your steps are up 12% — maintain this momentum.`,
    };

    // 4. Save to database for the day
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.prisma.dailyBriefing.upsert({
      where: {
        userId_date: {
          userId,
          date: today,
        },
      },
      update: simulatedResponse,
      create: {
        userId,
        date: today,
        ...simulatedResponse,
      },
    });
  }
}
