import { CommunityService } from './community.service';
export declare class CommunityController {
    private readonly communityService;
    constructor(communityService: CommunityService);
    getCircles(req: any): Promise<{
        id: string;
        name: string;
        members: number;
        avatar: string;
        lastActivity: string;
    }[]>;
    getEvents(req: any): Promise<{
        id: string;
        title: string;
        date: string;
        location: string;
        attendees: number;
        exclusive: boolean;
    }[]>;
    getMentors(req: any): Promise<{
        id: string;
        name: string;
        title: string;
        expertise: string[];
        rating: number;
    }[]>;
}
