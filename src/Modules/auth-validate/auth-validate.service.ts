import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthValidateService {
    constructor(private readonly mailerService: MailerService){
        
    }

    sendMail(): void{
        this.mailerService.sendMail(
            {
                to: 'ledgoy0321@gmail.com',
                from: 'edsghot@gmail.com',
                subject: 'Probando la validacion',
                text: 'welcomee Ed',
                html: '<b>departe de Ed</b>',
            }
        )
    }
}
