import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'CartItems' })
export class CartItem {
    @PrimaryGeneratedColumn()
    idCartItem: number;
    
    @Column()
    cart_id: number;
    
    @Column()
    product_id: number;
    
    @Column()
    quantity: number;
    
    @Column()
    status: boolean;
}
