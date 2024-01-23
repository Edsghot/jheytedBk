import { UserRole } from "../../ENTITY/User/user.entity"

export class createUserDto{
    Email: string;
    Password: string;
    FirstName: string;
    LastName: string;
    BirthDate: Date;
    Role: UserRole;
    points: number;
    ProfileImage: string;
    Phone: string;
    IdGoogle: string;
    IdFacebook: string;
}