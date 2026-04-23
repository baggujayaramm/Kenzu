import { PrismaService } from '../prisma/prisma.service';
export declare class AIService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    generateDailyBriefing(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        date: Date;
        greeting: string | null;
        quote: string | null;
        insight: string | null;
    }>;
}
