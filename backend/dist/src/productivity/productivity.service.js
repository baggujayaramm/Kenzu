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
exports.ProductivityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductivityService = class ProductivityService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getTimeline(userId) {
        return [
            { id: 't1', type: 'event', time: '09:00 AM', title: 'Board Meeting', color: '#C9A84C' },
            { id: 't2', type: 'task', time: '11:30 AM', title: 'Review Q3 Financials', color: '#4DABF7', completed: false },
            { id: 't3', type: 'event', time: '01:00 PM', title: 'Lunch with Investors', color: '#FF6B6B' },
            { id: 't4', type: 'task', time: '03:00 PM', title: 'Sign Acquisition Docs', color: '#4DABF7', completed: true },
        ];
    }
    async getFinanceOverview(userId) {
        return {
            netWorth: 2450000,
            liquid: 350000,
            monthlyBurn: 15000,
            currency: 'USD',
            accounts: [
                { name: 'Chase Private Client', balance: 210000, type: 'Checking' },
                { name: 'Charles Schwab', balance: 140000, type: 'Brokerage' },
            ]
        };
    }
};
exports.ProductivityService = ProductivityService;
exports.ProductivityService = ProductivityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductivityService);
//# sourceMappingURL=productivity.service.js.map