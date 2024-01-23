import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResMessage } from 'src/DTOs/Message/RespMessage.dto';
import { ValidateEmailSmsEntity } from 'src/ENTITY/AuthEntity/ValidateEmailSms.entity';
import { Message } from 'twilio/lib/twiml/MessagingResponse';
import { Repository } from 'typeorm';

@Injectable()
export class AuthValidateService {
    constructor(private readonly mailerService: MailerService,@InjectRepository(ValidateEmailSmsEntity) private validateRepository: Repository<ValidateEmailSmsEntity>, private resMessage:ResMessage ){
              
    }

    async sendMail(email: string){
        const code = '789456';

        const existing = await this.validateRepository.findOne({
            where: { Email: email },
          });
        
          if(existing != null){
            await this.validateRepository.delete(existing);
          }
        
            var nuevo = new ValidateEmailSmsEntity();
            nuevo.Email = email;
            nuevo.Code = code;
            const newValidate = this.validateRepository.create(nuevo)
            this.validateRepository.save(newValidate)


        this.mailerService.sendMail(
            {
                to: email,
                from: 'edsghot@gmail.com',
                subject: 'Por favor verifique su dirección de correo electrónico',
                text: 'welcomee Ed',
                html: `<p style="border: 1px solid #ccc; padding: 10px;">Hola, Jhair. <br> <br> A continuación, le enviamos su código de verificación de correo electrónico: <br><br><strong>${code}</strong> <br></p>`,
            }
        )
    }
}
