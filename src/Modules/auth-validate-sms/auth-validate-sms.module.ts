import { Module } from '@nestjs/common';
import { AuthValidateSmsService } from './auth-validate-sms.service';
import { AuthValidateSmsController } from './auth-validate-sms.controller';

@Module({
  providers: [AuthValidateSmsService],
  controllers: [AuthValidateSmsController]
})
export class AuthValidateSmsModule {}
