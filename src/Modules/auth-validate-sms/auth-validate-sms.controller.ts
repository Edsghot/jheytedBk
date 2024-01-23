import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthValidateSmsService } from './auth-validate-sms.service';

@Controller('authSms')
export class AuthValidateSmsController {
    constructor(private readonly smsService: AuthValidateSmsService) {}

    @Post('sendVerificationCode')
    async sendVerificationCode(@Body() body: { phoneNumber: string; code: string }): Promise<string> {
      try {
        await this.smsService.sendVerificationCode(body.phoneNumber, body.code);
        return 'SMS sent successfully';
      } catch (error) {
        throw new HttpException('Failed to send SMS', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
}
