import { PrismaService } from '../prisma/prisma.service';
export declare class CommunityService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCircles(userId: string): Promise<{
        id: string;
        name: string;
        members: number;
        avatar: string;
        lastActivity: string;
    }[]>;
    getEvents(userId: string): Promise<{
        id: string;
        title: string;
        date: string;
        location: string;
        attendees: number;
        exclusive: boolean;
    }[]>;
    getMentors(userId: string): Promise<{
        id: string;
        name: string;
        title: string;
        expertise: string[];
        rating: number;
    }[]>;
}
