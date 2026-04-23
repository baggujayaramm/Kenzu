import { CommerceService } from './commerce.service';
export declare class CommerceController {
    private readonly commerceService;
    constructor(commerceService: CommerceService);
    getFeed(req: any): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        image: string;
    }[]>;
    getSubscriptions(req: any): Promise<{
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
    addSubscription(req: any, data: any): Promise<{
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
