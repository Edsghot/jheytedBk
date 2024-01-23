export declare class AuthValidateSmsService {
    private twilioClient;
    constructor();
    sendVerificationCode(phoneNumber: string, code: string): Promise<void>;
}
