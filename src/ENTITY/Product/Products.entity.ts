import { Entity , Column, PrimaryGeneratedColumn} from "typeorm"

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
}
