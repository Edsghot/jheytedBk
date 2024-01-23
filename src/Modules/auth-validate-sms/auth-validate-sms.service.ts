import { Injectable } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio/dist/module/twilio.service';

@Injectable()
export class AuthValidateSmsService {
  public constructor(private readonly twilioService: TwilioService) {}

  async sendSMS() {
    try{
      return await this.twilioService.client.messages.create({
        body: 'SMS Body, sent to the phone!',
        from: '926706376',
        to: '926706376',
      });
    }catch(e){
      return {
        mes: e.message,
        mess: e
      }
    }
    
  }
}
