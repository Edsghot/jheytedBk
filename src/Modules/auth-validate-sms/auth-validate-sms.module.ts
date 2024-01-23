import { Module } from '@nestjs/common';
import { AuthValidateSmsService } from './auth-validate-sms.service';
import { AuthValidateSmsController } from './auth-validate-sms.controller';
import { TwilioModule } from 'nestjs-twilio';

@Module({
  imports: [
    TwilioModule.forRoot({
      accountSid: 'ACa9c24fdab76555907f88cc241b9a06e5',
      authToken: '4187a59d8d22811c2ea726c0bea005e0',
    }),
  ],
  providers: [AuthValidateSmsService],
  controllers: [AuthValidateSmsController]
})
export class AuthValidateSmsModule {}
