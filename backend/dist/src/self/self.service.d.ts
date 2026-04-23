import { PrismaService } from '../prisma/prisma.service';
import { AIService } from '../ai/ai.service';
export declare class SelfService {
    private prisma;
    private aiService;
    constructor(prisma: PrismaService, aiService: AIService);
    logMood(userId: string, data: {
        moodScore: number;
        moodLabel?: string;
        journalEntry?: string;
        tags?: string[];
    }): Promise<{
        id: string;
        userId: string;
        moodScore: number | null;
        moodLabel: string | null;
        journalEntry: string | null;
        tags: string[];
        loggedAt: Date;
    }>;
    getMoods(userId: string): Promise<{
        id: string;
        userId: string;
        moodScore: number | null;
        moodLabel: string | null;
        journalEntry: string | null;
        tags: string[];
        loggedAt: Date;
    }[]>;
    getDailyBriefing(userId: string): Promise<{
        greeting: string | null;
        quote: string | null;
        insight: string | null;
        agenda: never[];
        reminders: never[];
    }>;
}
