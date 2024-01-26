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
    createUser(user: createUserDto): {
        msg: string;
        value: Promise<UserEntity>;
        succes?: undefined;
    } | {
        msg: string;
        succes: boolean;
        value?: undefined;
    };
    getbyId(idUser: number): {
        msg: string;
        value: Promise<UserEntity>;
    };
    loginUser(user: loginUsers): Promise<{
        msg: string;
        value: UserEntity;
    } | {
        msg: string;
        value?: undefined;
    }>;
    getAllUser(): {
        msg: string;
        value: Promise<UserEntity[]>;
    };
    deleteUser(): void;
    updateUser(): void;
    validateCode(data: ValidateEmailDto): Promise<{
        msg: string;
        value: boolean;
    }>;
}
