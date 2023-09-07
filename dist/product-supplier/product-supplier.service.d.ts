import { ProductSupplier } from './entity/productSupplier.entity';
import { Repository } from 'typeorm';
import { createProductSupplier } from './dto/createProductSupplier.dto';
export declare class ProductSupplierService {
    private productSupplierRepository;
    constructor(productSupplierRepository: Repository<ProductSupplier>);
    createProductSupplier(productSupplier: createProductSupplier): Promise<ProductSupplier>;
    getAllProductSupplier(): Promise<ProductSupplier[]>;
}
