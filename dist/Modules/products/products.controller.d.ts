import { ProductsService } from './products.service';
import { createProduct } from '../../DTOs/Product/createProducto.dto';
export declare class ProductsController {
    private ProductService;
    constructor(ProductService: ProductsService);
    getUsers(): Promise<import("../../ENTITY/Product/Products.entity").ProductEntity[]>;
    getById(productId: number): Promise<import("../../ENTITY/Product/Products.entity").ProductEntity>;
    createUser(newUser: createProduct): Promise<import("../../ENTITY/Product/Products.entity").ProductEntity>;
}
