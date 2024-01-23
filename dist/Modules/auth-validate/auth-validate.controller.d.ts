import { AuthValidateService } from './auth-validate.service';
export declare class AuthValidateController {
    private readonly authService;
    constructor(authService: AuthValidateService);
    sendMail(email: string): Promise<void>;
}
