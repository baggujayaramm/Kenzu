import { PrismaService } from '../prisma/prisma.service';
export declare class ProductivityService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getTimeline(userId: string): Promise<({
        id: string;
        type: string;
        time: string;
        title: string;
        color: string;
        completed?: undefined;
    } | {
        id: string;
        type: string;
        time: string;
        title: string;
        color: string;
        completed: boolean;
    })[]>;
    getFinanceOverview(userId: string): Promise<{
        netWorth: number;
        liquid: number;
        monthlyBurn: number;
        currency: string;
        accounts: {
            name: string;
            balance: number;
            type: string;
        }[];
    }>;
}
