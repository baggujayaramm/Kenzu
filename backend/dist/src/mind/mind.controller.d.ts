import { MindService } from './mind.service';
export declare class MindController {
    private mindService;
    constructor(mindService: MindService);
    getLibrary(): Promise<{
        id: string;
        title: string;
        durationMintues: number;
        type: string;
    }[]>;
}
