import { Injectable } from '@nestjs/common';
import { Product } from './entity/Products.entity';
import { createProduct } from './dto/createProducto.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}

    
    createProduct(product: createProduct){
        const newProduct = this.productRepository.create(product)
        return this.productRepository.save(newProduct)
    }

    getAllProduct(){
        return this.productRepository.find();
    }
    getbyId(productId: number){
        return this.productRepository.findOne({
            where: { productId:productId}
          });
        
    }
    
}
