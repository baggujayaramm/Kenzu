import { PrismaService } from '../prisma/prisma.service';
export declare class FoodService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getRecommendations(userId: string): Promise<{
        id: string;
        title: string;
        vendor: string;
        calories: number;
        type: string;
    }[]>;
    setMacros(userId: string, macros: {
        protein: number;
        carbs: number;
        fats: number;
        calories: number;
    }): Promise<{
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
    getMacros(userId: string): Promise<any>;
}
