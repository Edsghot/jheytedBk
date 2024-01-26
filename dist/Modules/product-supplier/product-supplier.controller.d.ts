import { ProductSupplierService } from './product-supplier.service';
import { createProductSupplierDto } from 'src/DTOs/ProductSuplier/createProductSupplier.dto';
export declare class ProductSupplierController {
    private ProductService;
    constructor(ProductService: ProductSupplierService);
    getUsers(): Promise<import("../../ENTITY/ProductSuplier/productSupplier.entity").ProductSupplierEntity[]>;
    createProductSupplier(productSupplierData: createProductSupplierDto): Promise<{
        success: boolean;
        data: import("../../ENTITY/ProductSuplier/productSupplier.entity").ProductSupplierEntity;
    }>;
}
