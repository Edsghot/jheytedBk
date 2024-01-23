import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { ProductEntity } from "../Product/Products.entity";
import { SupplierEntity } from "../Supplier/Supplier.entity";

export enum CategoryEnum{
    normal = 0,
    MasVendido = 1,
    Recomendado = 2,
}


@Entity({ name: 'ProductSuppliers' })
export class ProductSupplierEntity {
    @PrimaryGeneratedColumn()
    IdProductSupplier: number;
    
    @Column({ type: 'double' })
    PriceProduct: number;

    @ManyToOne(() => ProductEntity, product => product.IdProduct)
    @JoinColumn({ name: 'IdProduct' })
    product: ProductEntity;

    @ManyToOne(() => SupplierEntity, supplier => supplier.IdSupplier)
    @JoinColumn({ name: 'IdSupplier' })
    supplier: SupplierEntity;
    
    @Column()
    ImgProduct: string;
    
    @Column({nullable: true})
    IsPromotion: boolean;
    
    @Column({ type: 'double',nullable: true })
    PromotionPrice: number;

    @Column()
    Score: number;

    @Column()
    Stock: number;
    
    @Column()
    DateAdded: Date;

    @Column({nullable: true})
    Category: CategoryEnum;

}
