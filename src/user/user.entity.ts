import { Entity , Column, PrimaryGeneratedColumn} from "typeorm"

export enum UserRole {
    admin = 'ADMINISTRATOR',
    user = 'USER',
    supplier = 'SUPPLIER'
}

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;
    
    @Column({ unique: true })
    email: string;
    
    @Column()
    password: string;
    
    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    birthDate: Date;
    
    @Column()
    role: UserRole;
    
    @Column()
    points: number;
    
    @Column()
    profileImage: string;
}
