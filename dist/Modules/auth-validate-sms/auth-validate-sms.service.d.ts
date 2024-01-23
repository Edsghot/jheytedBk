import { TwilioService } from 'nestjs-twilio/dist/module/twilio.service';
export declare class AuthValidateSmsService {
    private readonly twilioService;
    constructor(twilioService: TwilioService);
    sendSMS(): Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance | {
        mes: any;
        mess: any;
    }>;
}
