import { ProductSupplierEntity } from '../../ENTITY/ProductSuplier/productSupplier.entity';
import { Repository } from 'typeorm';
export declare class ProductSupplierService {
    private productSupplierRepository;
    constructor(productSupplierRepository: Repository<ProductSupplierEntity>);
    getAllProductSupplier(): Promise<ProductSupplierEntity[]>;
}
