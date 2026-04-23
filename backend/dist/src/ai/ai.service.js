"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AIService = class AIService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateDailyBriefing(userId) {
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
        const simulatedResponse = {
            greeting: `Good morning, ${profile?.user.name.split(' ')[0]}. Your sanctuary is ready.`,
            quote: "Quality is not an act, it is a habit.",
            insight: `Based on your recent ${recentMood[0]?.moodLabel || 'neutral'} mood, try 5 minutes of box breathing today. Your steps are up 12% — maintain this momentum.`,
        };
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
};
exports.AIService = AIService;
exports.AIService = AIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AIService);
//# sourceMappingURL=ai.service.js.map