import { Entity , Column, PrimaryGeneratedColumn} from "typeorm"

export enum typeDrinks{
    Alcoholic  = 0,
    Soda = 1,
    Water = 2,
    Energetic = 3
}

export enum TypeEnum {
    Wisky = 0,
    Rones = 1,
    Pisco = 2,
    vino = 3,
    vodka = 4,
    otros = 999
}

export enum ContainerTypeEnum{
    Canned = 0,
    Disposable = 1,
    Glass = 2
}

@Entity({ name: 'Products' })
export class ProductEntity {
    @PrimaryGeneratedColumn()
    IdProduct: number;
    
    @Column()
    Name: string;
    
    @Column()
    Flavor: string;
    
    @Column()
    Volume: string;
    
    @Column()
    Ml: string;
    
    @Column({type: 'double'})
    Score: number;

    @Column()
    Bestselling: number;

    @Column()
    Description: string;

    @Column()
    Type: TypeEnum;

    @Column()
    ContainerType: ContainerTypeEnum;

    @Column({nullable: true})
    Category: typeDrinks;
}
