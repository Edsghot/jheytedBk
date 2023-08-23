import { Controller,Get, Post,Body } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    createUser(@Body() newUser: createUserDto){
        return this.userService.createUser(newUser);
    }
}
