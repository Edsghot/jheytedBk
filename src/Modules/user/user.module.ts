import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserEntity } from '../../ENTITY/User/user.entity';
import { ValidateEmailSmsEntity } from 'src/ENTITY/AuthEntity/ValidateEmailSms.entity';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),TypeOrmModule.forFeature([ValidateEmailSmsEntity])],
  controllers: [UserController],
  providers: [UserService,CloudinaryService]
})
export class UserModule {}
