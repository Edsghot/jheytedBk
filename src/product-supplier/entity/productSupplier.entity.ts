import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ProductSupplier' })
export class ProductSupplier {
    @PrimaryGeneratedColumn()
    idProductSupplier: number;
    
    @Column()
    product_id: number;
    
    @Column()
    supplier_id: number;
    
    @Column({nullable: true})
    isPromotion: boolean;
    
    @Column({ type: 'double' })
    promotionPrice: number;
}
