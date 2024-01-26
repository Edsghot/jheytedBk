import { ProductsService } from './products.service';
import { createProduct } from '../../DTOs/Product/createProducto.dto';
export declare class ProductsController {
    private ProductService;
    constructor(ProductService: ProductsService);
    getUsers(): Promise<import("../../ENTITY/Product/Products.entity").ProductEntity[]>;
    getById(productId: number): Promise<import("../../ENTITY/Product/Products.entity").ProductEntity>;
    getBestSelling(rating: number): Promise<{
        msg: string;
        value: any;
    }>;
    createUser(newUser: createProduct): {
        msg: string;
        value: Promise<import("../../ENTITY/Product/Products.entity").ProductEntity>;
        sucess?: undefined;
    } | {
        msg: string;
        value: any;
        sucess: boolean;
    };
}
