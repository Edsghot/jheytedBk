import { AuthValidateSmsService } from './auth-validate-sms.service';
export declare class AuthValidateSmsController {
    private readonly authService;
    constructor(authService: AuthValidateSmsService);
    sendMail(): Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance | {
        mes: any;
        mess: any;
    }>;
}
