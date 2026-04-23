import { HealthService } from './health.service';
export declare class HealthController {
    private healthService;
    constructor(healthService: HealthService);
    getMetrics(req: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        metricType: string;
        value: number | null;
        unit: string | null;
        source: string | null;
        recordedAt: Date | null;
    }[]>;
    syncMetrics(req: any, data: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        metricType: string;
        value: number | null;
        unit: string | null;
        source: string | null;
        recordedAt: Date | null;
    }>;
}
