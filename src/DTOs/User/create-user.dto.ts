import { UserRole } from "../../ENTITY/User/user.entity"

export class createUserDto{
    Email: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Age: Date;
    Role: UserRole;
    points: number;
    profileImg: string;

}