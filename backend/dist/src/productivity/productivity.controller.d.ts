import { ProductivityService } from './productivity.service';
export declare class ProductivityController {
    private readonly productivityService;
    constructor(productivityService: ProductivityService);
    getTimeline(req: any): Promise<({
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
    getFinanceOverview(req: any): Promise<{
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
