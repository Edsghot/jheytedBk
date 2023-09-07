import { ProductSupplierService } from './product-supplier.service';
import { createProductSupplier } from './dto/createProductSupplier.dto';
export declare class ProductSupplierController {
    private ProductService;
    constructor(ProductService: ProductSupplierService);
    getUsers(): Promise<import("./entity/productSupplier.entity").ProductSupplier[]>;
    createUser(newProduct: createProductSupplier): Promise<import("./entity/productSupplier.entity").ProductSupplier>;
}
