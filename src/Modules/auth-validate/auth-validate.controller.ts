import { Controller, Get } from '@nestjs/common';
import { AuthValidateService } from './auth-validate.service';
import { from } from 'rxjs';

@Controller('auth-validate')
export class AuthValidateController {
    constructor(private readonly authService: AuthValidateService){

    }

    @Get()
    sendMail(): void{
        return this.authService.sendMail();
    }
}
