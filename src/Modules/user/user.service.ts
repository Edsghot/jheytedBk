import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import {UserEntity, UserRole} from '../../ENTITY/User/user.entity'
import { Repository } from 'typeorm';
import {createUserDto} from '../../DTOs/User/create-user.dto'
import { loginUsers } from '../../DTOs/User/loginUser.dto';
import { ValidateEmailDto } from 'src/DTOs/ValidateEmail/validateEmail.dto';
import { ResMessage } from 'src/DTOs/Message/RespMessage.dto';
import { ValidateEmailSmsEntity } from 'src/ENTITY/AuthEntity/ValidateEmailSms.entity';


@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,@InjectRepository(ValidateEmailSmsEntity) private validateRepository: Repository<ValidateEmailSmsEntity>){}

    
    async createUser(user: createUserDto){

        var u = new UserEntity();

        var res = await this.userRepository.findOne({
          where: {Email: user.Email}
        })

        if(res != null){
          return {
            msg: "Ya existe registrado el correo, pruebe otro",
            sucess: false
          }
        }


        u.Email = user.Email;
        u.Password = user.Password;
        u.UserName = user.FirstName;
        u.Descrption = " __x____";
        u.FirstName = user.FirstName;
        u.LastName = user.LastName;
        u.BirthDate = user.BirthDate;
        u.Role = UserRole.user;
        u.Points = 0;
        u.Phone = user.Phone;
        u.ProfileImage = "https://i.pinimg.com/736x/4b/a3/43/4ba343a87d8da59e1e4d0bdf7dc09484.jpg";
        u.DateAdded = new Date();
        u.IdGoogle = user.IdGoogle;
        u.IdFacebook = user.IdFacebook;


        try{
          const newUser = this.userRepository.create(u)
          return {msg: "Se creo correctamente",
                  value: this.userRepository.save(newUser)}
        }catch(e){
          return {
            msg: "error al registrar el usuario: "+e,
            succes: false
          }
        }
        
    }

    getbyId(idUser: number){


      var user = this.userRepository.findOne({
          where: { IdUser:idUser}
        });

        if(user === null){
          return {
            msg:"No existe ningun usuario que cuencida",
            value: null
          }
        }

        return {
          msg: " se encontro correctamente",
          value: user
        }
      
    }

  
    async loginUser(user: loginUsers) {
        const { Email, Password } = user;
      
        const existingUser = await this.userRepository.findOne({
          where: { Email, Password }
        });
      
        if (existingUser) {
          return {msg: "Ingreso correctamente",
                  value: existingUser};
        } else {
          return { msg: "credenciales invalidas" };
        }
      }
    async getAllUser(){
        return {msg:"Lista de Usuarios",
                value: await this.userRepository.find()}
    }
    deleteUser(){}
    updateUser(){}

    async validateCode(data: ValidateEmailDto) {
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
