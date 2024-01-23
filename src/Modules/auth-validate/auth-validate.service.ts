import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResMessage } from 'src/DTOs/Message/RespMessage.dto';
import { ValidateEmailDto } from 'src/DTOs/ValidateEmail/validateEmail.dto';
import { ValidateEmailSmsEntity } from 'src/ENTITY/AuthEntity/ValidateEmailSms.entity';
import { Message } from 'twilio/lib/twiml/MessagingResponse';
import { Repository } from 'typeorm';

@Injectable()
export class AuthValidateService {
    constructor(private readonly mailerService: MailerService,@InjectRepository(ValidateEmailSmsEntity) private validateRepository: Repository<ValidateEmailSmsEntity>){
}
 
     async sendMail(email: string){
        var res = new ResMessage();
        const code = '789456';
        
        var existing = await this.validateRepository.findOne({
            where: {Email:email}
        })

        if(existing != null){
            await this.validateRepository.delete(existing);
        }

        var nuevo = new ValidateEmailSmsEntity();
            nuevo.Email = email;
            nuevo.Code = code;
            const newValidate = this.validateRepository.create(nuevo)
            await this.validateRepository.save(newValidate)


         await this.mailerService.sendMail(
            {
                to: email,
                from: 'edsghot@gmail.com',
                subject: 'Por favor verifique su dirección de correo electrónico',
                text: 'welcomee Dizzgo',
                html: `<p style="border: 1px solid #ccc; padding: 10px;">Hola, ${email}. <br> <br> A continuación, le enviamos su código de verificación de correo electrónico: <br><br><strong>${code}</strong> <br></p>`,
            }
        )
        
        return res.resultOK("Se envio correctamente");
    }

    
}
