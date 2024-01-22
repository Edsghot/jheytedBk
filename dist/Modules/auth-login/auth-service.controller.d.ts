import { AuthServiceService } from './auth-service.service';
export declare class AuthServiceController {
    private readonly appService;
    constructor(appService: AuthServiceService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): Promise<"No user from google" | {
        message: string;
        value: any;
        create: boolean;
    }>;
    facebookAuth(req: any): Promise<void>;
    facebookAuthRedirect(req: any): Promise<"No user from google" | {
        message: string;
        value: any;
        create: boolean;
    }>;
}
