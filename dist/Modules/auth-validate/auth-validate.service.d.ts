import { MailerService } from '@nestjs-modules/mailer';
import { ValidateEmailSmsEntity } from 'src/ENTITY/AuthEntity/ValidateEmailSms.entity';
import { Repository } from 'typeorm';
export declare class AuthValidateService {
    private readonly mailerService;
    private validateRepository;
    constructor(mailerService: MailerService, validateRepository: Repository<ValidateEmailSmsEntity>);
    sendMail(email: string): Promise<void>;
}
