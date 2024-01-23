import { MailerService } from '@nestjs-modules/mailer';
export declare class AuthValidateService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(): void;
}
