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
exports.SelfService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const ai_service_1 = require("../ai/ai.service");
let SelfService = class SelfService {
    prisma;
    aiService;
    constructor(prisma, aiService) {
        this.prisma = prisma;
        this.aiService = aiService;
    }
    async logMood(userId, data) {
        return this.prisma.moodLog.create({
            data: {
                userId,
                ...data,
            },
        });
    }
    async getMoods(userId) {
        return this.prisma.moodLog.findMany({
            where: { userId },
            orderBy: { loggedAt: 'desc' },
        });
    }
    async getDailyBriefing(userId) {
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
        if (!briefing) {
            briefing = await this.aiService.generateDailyBriefing(userId);
        }
        return {
            greeting: briefing.greeting,
            quote: briefing.quote,
            insight: briefing.insight,
            agenda: [],
            reminders: []
        };
    }
};
exports.SelfService = SelfService;
exports.SelfService = SelfService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AIService])
], SelfService);
//# sourceMappingURL=self.service.js.map