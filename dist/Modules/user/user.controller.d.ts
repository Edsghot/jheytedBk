import { createUserDto } from '../../DTOs/User/create-user.dto';
import { UserService } from './user.service';
import { loginUsers } from '../../DTOs/User/loginUser.dto';
import { ValidateEmailDto } from 'src/DTOs/ValidateEmail/validateEmail.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<{
        msg: string;
        value: import("../../ENTITY/User/user.entity").UserEntity[];
    }>;
    getById(idUser: number): {
        msg: string;
        value: Promise<import("../../ENTITY/User/user.entity").UserEntity>;
    };
    createUser(newUser: createUserDto): {
        msg: string;
        value: Promise<import("../../ENTITY/User/user.entity").UserEntity>;
        succes?: undefined;
    } | {
        msg: string;
        succes: boolean;
        value?: undefined;
    };
    loginUser(loginUser: loginUsers): Promise<{
        msg: string;
        value: import("../../ENTITY/User/user.entity").UserEntity;
    } | {
        msg: string;
        value?: undefined;
    }>;
    validateCode(data: ValidateEmailDto): Promise<{
        msg: string;
        value: boolean;
    }>;
}
