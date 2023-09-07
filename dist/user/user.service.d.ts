import { User } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { loginUsers } from './dto/loginUser.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: createUserDto): Promise<User>;
    getbyId(idUser: number): Promise<User>;
    loginUser(user: loginUsers): Promise<User | {
        msg: string;
    }>;
    getAllUser(): Promise<User[]>;
    deleteUser(): void;
    updateUser(): void;
}
