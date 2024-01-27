import { Entity , Column, PrimaryGeneratedColumn} from "typeorm"

export enum UserRole {
    admin = 'ADMINISTRATOR',
    user = 'USER',
    supplier = 'SUPPLIER'
}

@Entity({ name: 'Users' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    IdUser: number;
    
    @Column({ unique: true })
    Email: string;
    
    @Column()
    Password: string;

    @Column()
    UserName: string;

    @Column()
    Description: string;
    
    @Column()
    FirstName: string;
    
    @Column()
    LastName: string;
    
    @Column()
    BirthDate: Date;
    
    @Column()
    Role: UserRole;
    
    @Column()
    Points: number;

    @Column()
    DateUpdate: Date;

    @Column()
    Phone: string;
    
    @Column()
    ProfileImage: string;

    @Column()
    DateAdded: Date;
    
    @Column()
    IdGoogle: string;

    @Column()
    IdFacebook: string;
}
