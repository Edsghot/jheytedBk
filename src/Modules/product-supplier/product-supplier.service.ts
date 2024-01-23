import { Injectable } from '@nestjs/common';
import { ProductSupplierEntity } from '../../ENTITY/ProductSuplier/productSupplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createProductSupplier } from '../../DTOs/ProductSuplier/createProductSupplier.dto';

@Injectable()
export class ProductSupplierService {
    
    constructor(@InjectRepository(ProductSupplierEntity) private productSupplierRepository: Repository<ProductSupplierEntity>){}

      /*  createProductSupplier(ProductSupplier: createProductSupplier){
            const newProductSupplier = this.productSupplierRepository.create(ProductSupplier)
            return this.productSupplierRepository.save(newProductSupplier)
        }*/

    getAllProductSupplier(){
        return this.productSupplierRepository.find();
    }
}
