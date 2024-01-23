import { ProductSupplierService } from './product-supplier.service';
import { createProductSupplier } from '../../DTOs/ProductSuplier/createProductSupplier.dto';
export declare class ProductSupplierController {
    private ProductService;
    constructor(ProductService: ProductSupplierService);
    getUsers(): Promise<import("../../ENTITY/ProductSuplier/productSupplier.entity").ProductSupplierEntity[]>;
    createUser(newProduct: createProductSupplier): void;
}
