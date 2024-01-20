import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
export declare class AuthServiceService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    googleLogin(req: any): Promise<"No user from google" | {
        message: string;
        value: any;
        create: boolean;
    }>;
    facebookLogin(req: any): Promise<"esta registrado" | {
        message: string;
        value: any;
        create: boolean;
    }>;
}
