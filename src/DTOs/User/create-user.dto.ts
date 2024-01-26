import { UserRole } from "../../ENTITY/User/user.entity"

export class createUserDto{
    Email: string;
    Password: string;
    FirstName: string;
    LastName: string;
    BirthDate: Date;
    Phone: string;
    IdGoogle: string;
    IdFacebook: string;
}