import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum CategoryEnum{
    normal = 0,
    MasVendido = 1,
    Recomendado = 2,
}


@Entity({ name: 'ProductSupplier' })
export class ProductSupplier {
    @PrimaryGeneratedColumn()
    IdProductSupplier: number;
    
    @Column({ type: 'double' })
    PriceProduct: number;

    @Column()
    IdProduct: number;
    
    @Column()
    IdSupplier: number;
    
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
