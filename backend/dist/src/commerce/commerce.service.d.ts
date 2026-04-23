import { PrismaService } from '../prisma/prisma.service';
export declare class CommerceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCuratedFeed(userId: string): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        image: string;
    }[]>;
    getSubscriptions(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        serviceName: string;
        amount: import("@prisma/client-runtime-utils").Decimal | null;
        currency: string;
        billingCycle: string | null;
        nextBilling: Date | null;
        isTracked: boolean;
    }[]>;
    addSubscription(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        serviceName: string;
        amount: import("@prisma/client-runtime-utils").Decimal | null;
        currency: string;
        billingCycle: string | null;
        nextBilling: Date | null;
        isTracked: boolean;
    }>;
}
