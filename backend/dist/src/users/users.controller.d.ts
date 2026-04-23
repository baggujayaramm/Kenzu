import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<({
        user: {
            id: string;
            email: string;
            name: string;
            password: string | null;
            phone: string | null;
            avatarUrl: string | null;
            tier: string;
            onboarded: boolean;
            timezone: string | null;
            language: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
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
    }) | null>;
    updateProfile(req: any, data: any): Promise<{
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
    updateSettings(req: any, data: any): Promise<({
        user: {
            id: string;
            email: string;
            name: string;
            password: string | null;
            phone: string | null;
            avatarUrl: string | null;
            tier: string;
            onboarded: boolean;
            timezone: string | null;
            language: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
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
    }) | null>;
}
