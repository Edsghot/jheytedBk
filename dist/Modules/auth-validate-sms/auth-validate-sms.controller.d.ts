import { AuthValidateSmsService } from './auth-validate-sms.service';
export declare class AuthValidateSmsController {
    private readonly smsService;
    constructor(smsService: AuthValidateSmsService);
    sendVerificationCode(body: {
        phoneNumber: string;
        code: string;
    }): Promise<string>;
}
