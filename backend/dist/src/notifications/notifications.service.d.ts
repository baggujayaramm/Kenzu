import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserNotifications(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        type: string | null;
        title: string;
        body: string | null;
        isRead: boolean;
        actionUrl: string | null;
    }[]>;
    createNotification(data: {
        userId: string;
        type?: string;
        title: string;
        body?: string;
        actionUrl?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        type: string | null;
        title: string;
        body: string | null;
        isRead: boolean;
        actionUrl: string | null;
    }>;
    markAsRead(notificationId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        type: string | null;
        title: string;
        body: string | null;
        isRead: boolean;
        actionUrl: string | null;
    }>;
}
