import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../../ENTITY/Product/Products.entity';
import { createProduct } from '../../DTOs/Product/createProducto.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>){}

    
    createProduct(product: createProduct){
        const newProduct = this.productRepository.create(product)
        return this.productRepository.save(newProduct)
    }

    getAllProduct(){
        return this.productRepository.find();
    }
    getbyId(productId: number){
        return this.productRepository.findOne({
            where: { IdProduct:productId}
          });
        
    }
    
}
