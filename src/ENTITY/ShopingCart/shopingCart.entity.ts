import { Entity , Column, PrimaryGeneratedColumn, Double} from "typeorm"

@Entity({ name: 'ShoppingCarts' })
export class ShoppingCart {
    @PrimaryGeneratedColumn()
     idShopingCart: number;
    
    @Column({ unique: true })
    user_id: string;
    
    @Column()
    shoppingDate: string;
    
    @Column()
    total: number;
    
    @Column({unique: true})
    voucherImage: string;
    
    @Column()
    status: number;
}
