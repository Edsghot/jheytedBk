import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'Validate' })
export class ValidateEmailSmsEntity{
    @PrimaryGeneratedColumn()
    IdValidate: number;
    
    @Column({ unique: true })
    Email: string;
    
    @Column()
    Code: string;
}

