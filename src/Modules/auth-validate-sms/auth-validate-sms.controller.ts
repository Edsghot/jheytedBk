import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthValidateSmsService } from './auth-validate-sms.service';

@Controller('authSms')
export class AuthValidateSmsController {
  constructor(private readonly authService: AuthValidateSmsService){

  }

  @Get()
  async sendMail(){
      return await this.authService.sendSMS();
  }
}
