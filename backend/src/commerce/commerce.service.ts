import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommerceService {
  constructor(private readonly prisma: PrismaService) {}

  async getCuratedFeed(userId: string) {
    // Simulated curated premium feed
    return [
      { id: 'p1', name: 'Aesop Resurrection Aromatique Hand Wash', price: 40, category: 'Apothecary', image: 'placeholder-aesop' },
      { id: 'p2', name: 'Oura Ring Gen3 Horizon', price: 349, category: 'Wearables', image: 'placeholder-oura' },
      { id: 'p3', name: 'Ember Temperature Control Smart Mug 2', price: 149, category: 'Lifestyle', image: 'placeholder-ember' },
    ];
  }

  async getSubscriptions(userId: string) {
    return this.prisma.userSubscription.findMany({
      where: { userId },
      orderBy: { nextBilling: 'asc' }
    });
  }

  async addSubscription(userId: string, data: any) {
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
}
