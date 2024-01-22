import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Cart' })
export class Cart {
    @PrimaryGeneratedColumn()
    idCart: number;
    
    @Column()
    user_id: number;
    
    @Column()
    creationDate: Date;
    
    @Column()
    status: boolean;
}
