import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import {User} from './user.entity'
import { Repository } from 'typeorm';
import {createUserDto} from './dto/create-user.dto'
import { loginUsers } from './dto/loginUser.dto';
import { NotFoundError } from 'rxjs';


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    
    createUser(user: createUserDto){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    async loginUser(user: loginUsers) {
        const { correo, contraseña } = user;
      
        const existingUser = await this.userRepository.findOne({
          where: { correo, contraseña }
        });
      
        if (existingUser) {
          return existingUser;
        } else {
          return { msg: "credenciales invalidas" };
        }
      }
    getAllUser(){
        return this.userRepository.find();
    }
    deleteUser(){}
    updateUser(){}
}
