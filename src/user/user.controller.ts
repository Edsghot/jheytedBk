import { Controller,Get, Post,Body, Param } from '@nestjs/common';
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
    @Get(':idUser') // Define la ruta completa, ej: /products/1
    getById(@Param('idUser') idUser: number) { // Usa @Param('nombreDelParametro') para obtener el valor
      return this.userService.getbyId(idUser); // Llama al método en el servicio
    }


    @Post('insert')
    createUser(@Body() newUser: createUserDto){
        return this.userService.createUser(newUser);
    }
    @Post('login') 
    async loginUser(@Body() loginUser: loginUsers) {
      return await this.userService.loginUser(loginUser);
    }
}
