import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthValidateService } from './auth-validate.service';
import { from } from 'rxjs';

@Controller('auth-validate')
export class AuthValidateController {
    constructor(private readonly authService: AuthValidateService){

    }

    @Post()
    async sendMail(@Body() email: string){
        return await this.authService.sendMail(email);
    }
}
