import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { ProductEntity } from "../Product/Products.entity";
import { SupplierEntity } from "../Supplier/Supplier.entity";



@Entity({ name: 'ProductSuppliers' })
export class ProductSupplierEntity {
    @PrimaryGeneratedColumn()
    IdProductSupplier: number;
    
    @Column({ type: 'double' })
    PriceProduct: number;

    @ManyToOne(() => ProductEntity, product => product.IdProduct)
    @JoinColumn({ name: 'IdProduct' })
    Product: ProductEntity;

    @ManyToOne(() => SupplierEntity, supplier => supplier.IdSupplier)
    @JoinColumn({ name: 'IdSupplier' })
    Supplier: SupplierEntity;
    
    @Column()
    ImgProduct: string;
    
    @Column({nullable: true})
    IsPromotion: boolean;
    
    @Column({ type: 'double',nullable: true })
    PromotionPrice: number;

    @Column()
    Stock: number;

    @Column()
    ScorePublic: number;
    
    @Column()
    DateAdded: Date;

}
