import { createUserDto } from '../../DTOs/User/create-user.dto';
import { UserService } from './user.service';
import { loginUsers } from '../../DTOs/User/loginUser.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("../../ENTITY/User/user.entity").UserEntity[]>;
    getById(idUser: number): Promise<import("../../ENTITY/User/user.entity").UserEntity>;
    createUser(newUser: createUserDto): Promise<import("../../ENTITY/User/user.entity").UserEntity>;
    loginUser(loginUser: loginUsers): Promise<import("../../ENTITY/User/user.entity").UserEntity | {
        msg: string;
    }>;
}
