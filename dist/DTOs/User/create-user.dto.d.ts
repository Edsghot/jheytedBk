import { UserRole } from "../../Modules/user/user.entity";
export declare class createUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    age: Date;
    role: UserRole;
    points: number;
    profileImg: string;
}
