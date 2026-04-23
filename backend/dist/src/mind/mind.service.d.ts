import { PrismaService } from '../prisma/prisma.service';
export declare class MindService {
    private prisma;
    constructor(prisma: PrismaService);
    getMeditations(): Promise<{
        id: string;
        title: string;
        durationMintues: number;
        type: string;
    }[]>;
}
