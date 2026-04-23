import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(private prisma: PrismaService) {}

  async syncMetrics(userId: string, data: { metricType: string; value: number; unit: string; source: string }) {
    return this.prisma.healthMetric.create({
      data: {
        userId,
        ...data,
      },
    });
  }

  async getMetricsSummary(userId: string) {
    return this.prisma.healthMetric.findMany({
      where: { userId },
      orderBy: { recordedAt: 'desc' },
      take: 20
    });
  }
}
