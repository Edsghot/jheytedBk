import { ProductSupplierEntity } from '../../ENTITY/ProductSuplier/productSupplier.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/ENTITY/Product/Products.entity';
import { SupplierEntity } from 'src/ENTITY/Supplier/Supplier.entity';
import { createProductSupplierDto } from 'src/DTOs/ProductSuplier/createProductSupplier.dto';
export declare class ProductSupplierService {
    private productSupplierRepository;
    private productRepository;
    private supplierRepository;
    constructor(productSupplierRepository: Repository<ProductSupplierEntity>, productRepository: Repository<ProductEntity>, supplierRepository: Repository<SupplierEntity>);
    getAllProductSupplier(): Promise<ProductSupplierEntity[]>;
    createProductSupplier(productSupplier: createProductSupplierDto): Promise<ProductSupplierEntity>;
}
