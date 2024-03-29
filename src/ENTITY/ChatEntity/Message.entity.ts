import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../User/user.entity";

@Entity({ name: 'Messages' })
export class MessageEntity{
    @PrimaryGeneratedColumn()
    IdMessage: number;
    
    @Column({ type: 'text', charset: 'utf8mb4' })
    Text: string;

    @Column()
    Image: string;
    
    @ManyToOne(() => UserEntity, user => user.IdUser)
    @JoinColumn({ name: 'IdUser' })
    User: UserEntity;

    @Column()
    createDate: Date;

}