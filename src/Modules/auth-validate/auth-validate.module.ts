import { Module } from '@nestjs/common';
import { AuthValidateService } from './auth-validate.service';
import { AuthValidateController } from './auth-validate.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot(
      {
        transport: {
          service: 'gmail',
          auth:{
            user: 'edsghot@gmail.com',
            pass: 'ngaflzpbwzqbqykh'
          }
        }
      }
    )
  ],
  providers: [AuthValidateService],
  controllers: [AuthValidateController]
})
export class AuthValidateModule {}
