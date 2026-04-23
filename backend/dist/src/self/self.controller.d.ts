import { SelfService } from './self.service';
export declare class SelfController {
    private selfService;
    constructor(selfService: SelfService);
    getBriefing(req: any): Promise<{
        greeting: string | null;
        quote: string | null;
        insight: string | null;
        agenda: never[];
        reminders: never[];
    }>;
    getMoods(req: any): Promise<{
        id: string;
        userId: string;
        moodScore: number | null;
        moodLabel: string | null;
        journalEntry: string | null;
        tags: string[];
        loggedAt: Date;
    }[]>;
    logMood(req: any, data: any): Promise<{
        id: string;
        userId: string;
        moodScore: number | null;
        moodLabel: string | null;
        journalEntry: string | null;
        tags: string[];
        loggedAt: Date;
    }>;
}
