import { Entity , Column, PrimaryGeneratedColumn} from "typeorm"

@Entity({ name: 'Products' })
export class Product {
    @PrimaryGeneratedColumn()
    productId: number;
    
    @Column({ unique: true })
    name: string;
    
    @Column()
    flavor: string;
    
    @Column()
    volume: string;
    
    @Column()
    ml: string;
    
    @Column()
    rating: number;
}
