import { ProductSupplier } from '../../ENTITY/ProductSuplier/productSupplier.entity';
import { Repository } from 'typeorm';
import { createProductSupplier } from '../../DTOs/ProductSuplier/createProductSupplier.dto';
export declare class ProductSupplierService {
    private productSupplierRepository;
    constructor(productSupplierRepository: Repository<ProductSupplier>);
    createProductSupplier(productSupplier: createProductSupplier): Promise<ProductSupplier>;
    getAllProductSupplier(): Promise<ProductSupplier[]>;
}
