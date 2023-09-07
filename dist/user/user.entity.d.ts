export declare enum UserRole {
    admin = "ADMINISTRATOR",
    user = "USER",
    supplier = "SUPPLIER"
}
export declare class User {
    idUser: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    role: UserRole;
    points: number;
    profileImage: string;
}
