import { FoodService } from './food.service';
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    getRecommendations(req: any): Promise<{
        id: string;
        title: string;
        vendor: string;
        calories: number;
        type: string;
    }[]>;
    getMacros(req: any): Promise<any>;
    setMacros(req: any, body: any): Promise<{
        id: string;
        userId: string;
        age: number | null;
        gender: string | null;
        heightCm: number | null;
        weightKg: number | null;
        fitnessGoal: string | null;
        dietType: string | null;
        meditationExp: string | null;
        interests: string[];
        lifestyle: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
