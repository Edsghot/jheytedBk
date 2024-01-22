import { Injectable } from '@nestjs/common';
import { ProductSupplier } from '../../ENTITY/ProductSuplier/productSupplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createProductSupplier } from '../../DTOs/ProductSuplier/createProductSupplier.dto';

@Injectable()
export class ProductSupplierService {
    
    constructor(@InjectRepository(ProductSupplier) private productSupplierRepository: Repository<ProductSupplier>){}

        createProductSupplier(productSupplier: createProductSupplier){
            const newProductSupplier = this.productSupplierRepository.create(productSupplier)
            return this.productSupplierRepository.save(newProductSupplier)
        }

    getAllProductSupplier(){
        return this.productSupplierRepository.find();
    }
}
