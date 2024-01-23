export declare enum UserRole {
    admin = "ADMINISTRATOR",
    user = "USER",
    supplier = "SUPPLIER"
}
export declare class UserEntity {
    IdUser: number;
    Email: string;
    Password: string;
    FirstName: string;
    LastName: string;
    BirthDate: Date;
    Role: UserRole;
    Points: number;
    Phone: string;
    ProfileImage: string;
    VerificationCode: string;
    IdGoogle: string;
    IdFacebook: string;
}
