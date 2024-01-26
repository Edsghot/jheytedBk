import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'Suppliers' })
export class SupplierEntity {
    @PrimaryGeneratedColumn()
    IdSupplier: number;
    
    @Column({ unique: true })
    Email: string;
    
    @Column()
    Password: string;
    
    @Column()
    Name: string;
    
    @Column()
    ContactPerson: string;
    
    @Column()
    Direccion:string;
    
    @Column()
    Ruc: string;

    @Column()
    Dni: string;

    @Column()
    Phone: string;

    @Column()
    DateAdded: Date
    
}
