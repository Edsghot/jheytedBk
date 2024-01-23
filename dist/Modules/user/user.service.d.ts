import { UserEntity } from '../../ENTITY/User/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from '../../DTOs/User/create-user.dto';
import { loginUsers } from '../../DTOs/User/loginUser.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(user: createUserDto): Promise<UserEntity>;
    getbyId(idUser: number): Promise<UserEntity>;
    loginUser(user: loginUsers): Promise<UserEntity | {
        msg: string;
    }>;
    getAllUser(): Promise<UserEntity[]>;
    deleteUser(): void;
    updateUser(): void;
}
