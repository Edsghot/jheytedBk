import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { loginUsers } from './dto/loginUser.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./user.entity").User[]>;
    getById(idUser: number): Promise<import("./user.entity").User>;
    createUser(newUser: createUserDto): Promise<import("./user.entity").User>;
    loginUser(loginUser: loginUsers): Promise<import("./user.entity").User | {
        msg: string;
    }>;
}
