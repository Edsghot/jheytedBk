import { UserEntity } from '../../ENTITY/User/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from '../../DTOs/User/create-user.dto';
import { loginUsers } from '../../DTOs/User/loginUser.dto';
import { ValidateEmailDto } from 'src/DTOs/ValidateEmail/validateEmail.dto';
import { ValidateEmailSmsEntity } from 'src/ENTITY/AuthEntity/ValidateEmailSms.entity';
export declare class UserService {
    private userRepository;
    private validateRepository;
    constructor(userRepository: Repository<UserEntity>, validateRepository: Repository<ValidateEmailSmsEntity>);
    createUser(user: createUserDto): Promise<UserEntity>;
    getbyId(idUser: number): Promise<UserEntity>;
    loginUser(user: loginUsers): Promise<UserEntity | {
        msg: string;
    }>;
    getAllUser(): Promise<UserEntity[]>;
    deleteUser(): void;
    updateUser(): void;
    validateCode(data: ValidateEmailDto): Promise<{
        msg: string;
        value: boolean;
    }>;
}
