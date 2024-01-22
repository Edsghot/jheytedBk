import { ProductsService } from './products.service';
import { createProduct } from '../../DTOs/Product/createProducto.dto';
export declare class ProductsController {
    private ProductService;
    constructor(ProductService: ProductsService);
    getUsers(): Promise<import("../../ENTITY/Product/Products.entity").Product[]>;
    getById(productId: number): Promise<import("../../ENTITY/Product/Products.entity").Product>;
    createUser(newUser: createProduct): Promise<import("../../ENTITY/Product/Products.entity").Product>;
}
