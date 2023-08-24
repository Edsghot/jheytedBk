import { Entity , Column, PrimaryGeneratedColumn, Double} from "typeorm"

export enum ShoppingStatus {
    PROCESSING = 'PROCESSING',
    PAID = 'PAID',
    REVIEW = 'REVIEW',
}

@Entity({ name: 'ShoppingCart' })
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
    status: ShoppingCart;
}
