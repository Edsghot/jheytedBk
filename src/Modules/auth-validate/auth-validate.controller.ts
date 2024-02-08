import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AuthValidateService } from './auth-validate.service';
import { from } from 'rxjs';
import { ValidateEmailDto } from 'src/DTOs/ValidateEmail/validateEmail.dto';

@Controller('auth-validate')
export class AuthValidateController {
    constructor(private readonly authService: AuthValidateService){

    }

    @Get()
     async sendMail(@Query('email') email: string){
        return  await this.authService.sendMail(email);
    }

    @Get('/recoverPassword')
     async sendMailRecoverPassword(@Query('email') email: string){
        return  await this.authService.sendMailRecoverPassword(email);
    }

}
