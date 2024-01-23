import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthValidateService {
    constructor(private readonly mailerService: MailerService){
        
    }

    sendMail(): void{
        this.mailerService.sendMail(
            {
                to: 'jhair2003unamba@gmail.com',
                from: 'edsghot@gmail.com',
                subject: 'Por favor verifique su dirección de correo electrónico',
                text: 'welcomee Ed',
                html: '<p style="border: 1px solid #ccc; padding: 10px;">Hola, Jhair. <br> <br> A continuación, le enviamos su código de verificación de correo electrónico: <br><br><strong>987521</strong> <br></p>',
            }
        )
    }
}
