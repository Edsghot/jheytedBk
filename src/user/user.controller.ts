import { Controller,Get, Post,Body } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { loginUsers } from './dto/loginUser.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}
    @Get()
    getUsers(){
        return this.userService.getAllUser();
    }

    @Post()
    createUser(@Body() newUser: createUserDto){
        return this.userService.createUser(newUser);
    }
    @Post('login') 
    async loginUser(@Body() loginUser: loginUsers) {
      return await this.userService.loginUser(loginUser);
    }
}
