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
exports.CommerceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommerceService = class CommerceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCuratedFeed(userId) {
        return [
            { id: 'p1', name: 'Aesop Resurrection Aromatique Hand Wash', price: 40, category: 'Apothecary', image: 'placeholder-aesop' },
            { id: 'p2', name: 'Oura Ring Gen3 Horizon', price: 349, category: 'Wearables', image: 'placeholder-oura' },
            { id: 'p3', name: 'Ember Temperature Control Smart Mug 2', price: 149, category: 'Lifestyle', image: 'placeholder-ember' },
        ];
    }
    async getSubscriptions(userId) {
        return this.prisma.userSubscription.findMany({
            where: { userId },
            orderBy: { nextBilling: 'asc' }
        });
    }
    async addSubscription(userId, data) {
        return this.prisma.userSubscription.create({
            data: {
                userId,
                serviceName: data.serviceName,
                amount: data.amount,
                billingCycle: data.billingCycle || 'monthly',
                nextBilling: new Date(new Date().setMonth(new Date().getMonth() + 1)),
            }
        });
    }
};
exports.CommerceService = CommerceService;
exports.CommerceService = CommerceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommerceService);
//# sourceMappingURL=commerce.service.js.map