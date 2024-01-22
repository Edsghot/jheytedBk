import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../ENTITY/User/user.entity';

@Injectable()
export class AuthServiceService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async googleLogin(req){
        if(!req.user){
            return 'No user from google'
        }
        const {id} = req.user

        const existingUser = await this.userRepository.findOne({
            where: { idGoogle: id },
        });
        
        if(existingUser === null){
            return {
                message: 'Aun no esta registrado',
                value: req.user,
                create: false
            }
        }

        return {
            message: 'Esta registrado',
            value: req.user,
            create: true
        }
    }

    async facebookLogin(req){
        if(!req.user){
            return 'esta registrado'
        }

        const {id} = req.user

        const existingUser = await this.userRepository.findOne({
            where: { idFacebook: id },
        });

        if(existingUser === null){
            return {
                message: 'Aun no esta registrado',
                value: req.user,
                create: false
            }
        }

        return {
            message: 'Esta registrado',
            value: req.user,
            create: true
        }
    }
}
