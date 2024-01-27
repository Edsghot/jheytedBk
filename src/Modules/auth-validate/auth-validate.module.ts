import { Module } from '@nestjs/common';
import { AuthValidateService } from './auth-validate.service';
import { AuthValidateController } from './auth-validate.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ValidateEmailSmsEntity } from 'src/ENTITY/AuthEntity/ValidateEmailSms.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ValidateEmailSmsEntity]),
    MailerModule.forRoot(
      {
        transport: {
          service: 'gmail',
          auth:{
            user: 'dizzgo.app@gmail.com',
            pass: 'upyrdgonwkljuqcd'
          }
        }
      }
    )
  ],
  providers: [AuthValidateService],
  controllers: [AuthValidateController]
})
export class AuthValidateModule {}
