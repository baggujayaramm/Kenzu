import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(body: any): Promise<{
        access_token: string;
    }>;
    login(body: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
