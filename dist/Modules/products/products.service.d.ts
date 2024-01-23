import { ProductEntity } from '../../ENTITY/Product/Products.entity';
import { createProduct } from '../../DTOs/Product/createProducto.dto';
import { Repository } from 'typeorm';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    createProduct(product: createProduct): Promise<ProductEntity>;
    getAllProduct(): Promise<ProductEntity[]>;
    getbyId(productId: number): Promise<ProductEntity>;
}
