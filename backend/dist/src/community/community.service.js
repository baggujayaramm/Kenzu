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
exports.CommunityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommunityService = class CommunityService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCircles(userId) {
        return [
            {
                id: 'c1',
                name: 'Silicon Valley Founders',
                members: 12,
                avatar: '🚀',
                lastActivity: '2h ago',
            },
            {
                id: 'c2',
                name: 'Wellness Leaders',
                members: 8,
                avatar: '🧘',
                lastActivity: '5h ago',
            },
            {
                id: 'c3',
                name: 'Investment Club',
                members: 15,
                avatar: '📈',
                lastActivity: '1d ago',
            },
        ];
    }
    async getEvents(userId) {
        return [
            {
                id: 'e1',
                title: 'Future of AI — Private Dinner',
                date: '2026-05-15',
                location: 'The Leela Palace, Bangalore',
                attendees: 24,
                exclusive: true,
            },
            {
                id: 'e2',
                title: 'Morning Breathwork — Rooftop Session',
                date: '2026-05-08',
                location: 'Soho House, Mumbai',
                attendees: 12,
                exclusive: false,
            },
        ];
    }
    async getMentors(userId) {
        return [
            {
                id: 'm1',
                name: 'Arjun Mehta',
                title: 'Serial Entrepreneur & Angel Investor',
                expertise: ['Startups', 'Fundraising', 'Leadership'],
                rating: 4.9,
            },
            {
                id: 'm2',
                name: 'Dr. Priya Sharma',
                title: 'Wellness Coach & Neuroscientist',
                expertise: ['Mindfulness', 'Peak Performance', 'Stress Management'],
                rating: 5.0,
            },
        ];
    }
};
exports.CommunityService = CommunityService;
exports.CommunityService = CommunityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommunityService);
//# sourceMappingURL=community.service.js.map