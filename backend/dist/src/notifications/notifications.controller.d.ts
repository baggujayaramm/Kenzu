import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    getUserNotifications(req: any): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        type: string | null;
        title: string;
        body: string | null;
        isRead: boolean;
        actionUrl: string | null;
    }[]>;
    markAsRead(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        type: string | null;
        title: string;
        body: string | null;
        isRead: boolean;
        actionUrl: string | null;
    }>;
    createTestNotification(req: any, body: any): Promise<{
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
