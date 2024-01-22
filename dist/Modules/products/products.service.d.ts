import { Product } from '../../ENTITY/Product/Products.entity';
import { createProduct } from '../../DTOs/Product/createProducto.dto';
import { Repository } from 'typeorm';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    createProduct(product: createProduct): Promise<Product>;
    getAllProduct(): Promise<Product[]>;
    getbyId(productId: number): Promise<Product>;
}
