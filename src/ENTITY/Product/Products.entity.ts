import { Entity , Column, PrimaryGeneratedColumn} from "typeorm"

export enum TypeEnum {
    Wisky = 0,
    Rones = 1,
    Pisco = 2,
    Gaseosa = 3,
    Agua = 4
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
    
    @Column({ unique: true })
    Name: string;
    
    @Column()
    Flavor: string;
    
    @Column()
    Volume: string;
    
    @Column()
    Ml: string;
    
    @Column()
    Score: number;

    @Column()
    Bestselling: number;

    @Column()
    Description: string;

    @Column()
    Type: TypeEnum;

    @Column()
    ContainerType: ContainerTypeEnum;
}
