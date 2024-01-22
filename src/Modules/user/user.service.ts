import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import {User} from './user.entity'
import { Repository } from 'typeorm';
import {createUserDto} from '../../DTOs/User/create-user.dto'
import { loginUsers } from '../../DTOs/User/loginUser.dto';


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    
    createUser(user: createUserDto){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    getbyId(idUser: number){
      return this.userRepository.findOne({
          where: { idUser:idUser}
        });
      
    }

    async loginUser(user: loginUsers) {
        const { email, password } = user;
      
        const existingUser = await this.userRepository.findOne({
          where: { email, password }
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
