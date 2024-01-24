import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import {UserEntity} from '../../ENTITY/User/user.entity'
import { Repository } from 'typeorm';
import {createUserDto} from '../../DTOs/User/create-user.dto'
import { loginUsers } from '../../DTOs/User/loginUser.dto';
import { ValidateEmailDto } from 'src/DTOs/ValidateEmail/validateEmail.dto';
import { ResMessage } from 'src/DTOs/Message/RespMessage.dto';
import { ValidateEmailSmsEntity } from 'src/ENTITY/AuthEntity/ValidateEmailSms.entity';


@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,@InjectRepository(ValidateEmailSmsEntity) private validateRepository: Repository<ValidateEmailSmsEntity>){}

    
    createUser(user: createUserDto){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    getbyId(idUser: number){
      return this.userRepository.findOne({
          where: { IdUser:idUser}
        });
      
    }

  
    async loginUser(user: loginUsers) {
        const { Email, Password } = user;
      
        const existingUser = await this.userRepository.findOne({
          where: { Email, Password }
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

    async validateCode(data: ValidateEmailDto) {
      var res = new ResMessage();
      const { Email, Code } = data;
    
      var existing = await this.validateRepository.findOne({
        where: { Email }
      })
    
      if (existing === null) {
        return {msg:"Error en validar el codigo",
        value: false};
      }
    
      if (existing.Code === Code) {
        return {msg:"Esta correcto",
        value: true};
      }
    
      return {msg:"Error al validar código",
              value: false};
    }
}
