import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getHello(): string;
    joinWaitlist(email: string): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        tierAdded: string;
    }>;
}
