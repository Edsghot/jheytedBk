import { ProductsService } from './products.service';
import { createProduct } from './dto/createProducto.dto';
export declare class ProductsController {
    private ProductService;
    constructor(ProductService: ProductsService);
    getUsers(): Promise<import("./entity/Products.entity").Product[]>;
    getById(productId: number): Promise<import("./entity/Products.entity").Product>;
    createUser(newUser: createProduct): Promise<import("./entity/Products.entity").Product>;
}
