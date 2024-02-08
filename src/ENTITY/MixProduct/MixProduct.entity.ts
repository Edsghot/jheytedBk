import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany } from "typeorm";
import { ProductEntity } from "../Product/Products.entity";

@Entity({ name: 'MixProduct' })
export class MixProduct {
    @PrimaryGeneratedColumn()
    IdMixProduct: number;
    
    @ManyToMany(() => ProductEntity, product => product.IdProduct)
    @JoinColumn({ name: 'IdProduct' })
    IdUser: number;

    @ManyToOne(() => ProductEntity, product => product.IdProduct)
    @JoinColumn({ name: 'IdProduct' })
    Product: number;
    
    @Column()
    Name: string;
    
    @Column()
    ScorePublic: number;

    @Column()
    Private: boolean;

}
