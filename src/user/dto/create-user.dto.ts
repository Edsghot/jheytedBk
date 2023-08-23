import { UserRole } from "../user.entity"

export class createUserDto{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    role: UserRole;
    points: number;
    profileImg: string;

}