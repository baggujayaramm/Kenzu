import { PrismaService } from '../prisma/prisma.service';
export declare class HealthService {
    private prisma;
    constructor(prisma: PrismaService);
    syncMetrics(userId: string, data: {
        metricType: string;
        value: number;
        unit: string;
        source: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        metricType: string;
        value: number | null;
        unit: string | null;
        source: string | null;
        recordedAt: Date | null;
    }>;
    getMetricsSummary(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        metricType: string;
        value: number | null;
        unit: string | null;
        source: string | null;
        recordedAt: Date | null;
    }[]>;
}
