import { Module } from '@nestjs/common';
import { AuthValidateService } from './auth-validate.service';
import { AuthValidateController } from './auth-validate.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ValidateEmailSmsEntity } from 'src/ENTITY/AuthEntity/ValidateEmailSms.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    ),TypeOrmModule.forFeature([ValidateEmailSmsEntity])
  ],
  providers: [AuthValidateService],
  controllers: [AuthValidateController]
})
export class AuthValidateModule {}
