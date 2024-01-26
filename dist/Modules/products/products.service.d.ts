import { ProductEntity } from '../../ENTITY/Product/Products.entity';
import { createProduct } from '../../DTOs/Product/createProducto.dto';
import { Repository } from 'typeorm';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    createProduct(product: createProduct): {
        msg: string;
        value: Promise<ProductEntity>;
        sucess?: undefined;
    } | {
        msg: string;
        value: any;
        sucess: boolean;
    };
    getAllProduct(): Promise<ProductEntity[]>;
    getbyId(productId: number): Promise<ProductEntity>;
    getBestSelling(rating: number): Promise<{
        msg: string;
        value: any;
    }>;
}
