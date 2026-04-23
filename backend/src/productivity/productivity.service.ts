import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductivityService {
  constructor(private readonly prisma: PrismaService) {}

  async getTimeline(userId: string) {
    // Merged timeline of tasks and events for today
    return [
      { id: 't1', type: 'event', time: '09:00 AM', title: 'Board Meeting', color: '#C9A84C' },
      { id: 't2', type: 'task', time: '11:30 AM', title: 'Review Q3 Financials', color: '#4DABF7', completed: false },
      { id: 't3', type: 'event', time: '01:00 PM', title: 'Lunch with Investors', color: '#FF6B6B' },
      { id: 't4', type: 'task', time: '03:00 PM', title: 'Sign Acquisition Docs', color: '#4DABF7', completed: true },
    ];
  }

  async getFinanceOverview(userId: string) {
    // Read-only mockup for high-level finance view
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
}
