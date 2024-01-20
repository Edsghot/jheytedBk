import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthServiceController {
    constructor(private readonly appService: AuthServiceService){

    }

    @Get('authGoogle')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req){

    }

    @Get('auth/google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req){
        return await this.appService.googleLogin(req);
    }

    @Get('authFacebook')
    @UseGuards(AuthGuard('facebook'))
    async facebookAuth(@Req() req){

    }

    @Get('facebook/redirect')
    @UseGuards(AuthGuard('facebook'))
    async facebookAuthRedirect(@Req() req){
        return await this.appService.googleLogin(req);
    }
    
}
