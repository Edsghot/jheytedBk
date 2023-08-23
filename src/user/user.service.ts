import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import {User} from './user.entity'
import { Repository } from 'typeorm';
import {createUserDto} from './dto/create-user.dto'


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    
    createUser(user: createUserDto){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }
    
    getAllUser(){}
    deleteUser(){}
    updateUser(){}
}
