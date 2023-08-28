import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ProductSupplier' })
export class ProductSupplier {
    @PrimaryGeneratedColumn()
    idProductSupplier: number;
    
    @Column({ type: 'double' })
    priceProduct: number;

    @Column()
    product_id: number;
    
    @Column()
    supplier_id: number;
    
    @Column()
    imgProduct: string;
    
    @Column({nullable: true})
    isPromotion: boolean;
    
    @Column({ type: 'double',nullable: true })
    promotionPrice: number;
}
