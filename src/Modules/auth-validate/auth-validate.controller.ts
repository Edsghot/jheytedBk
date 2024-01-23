import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AuthValidateService } from './auth-validate.service';
import { from } from 'rxjs';

@Controller('auth-validate')
export class AuthValidateController {
    constructor(private readonly authService: AuthValidateService){

    }

    @Get()
     async sendMail(@Query('email') email: string){
        return  await this.authService.sendMail(email);
    }
}
