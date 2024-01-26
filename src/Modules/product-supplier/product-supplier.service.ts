import { Injectable } from '@nestjs/common';
import { ProductSupplierEntity } from '../../ENTITY/ProductSuplier/productSupplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/ENTITY/Product/Products.entity';
import { SupplierEntity } from 'src/ENTITY/Supplier/Supplier.entity';
import { createProductSupplierDto } from 'src/DTOs/ProductSuplier/createProductSupplier.dto';

@Injectable()
export class ProductSupplierService {
    
    constructor(
    @InjectRepository(ProductSupplierEntity) private productSupplierRepository: Repository<ProductSupplierEntity>,
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
    @InjectRepository(SupplierEntity) private supplierRepository: Repository<SupplierEntity>,){}

    async getAllProductSupplier(){
        const productSuppliers = await this.productSupplierRepository.find({
            relations: ['Product', 'Supplier'], 
          });

          return productSuppliers;
    }

    async createProductSupplier(productSupplier: createProductSupplierDto) {
        
        var n = new ProductSupplierEntity();

        n.Product = await this.productRepository.findOne({
            where: {IdProduct: productSupplier.IdProduct}
        })

        n.Supplier = await this.supplierRepository.findOne({
            where: {IdSupplier: productSupplier.IdSupplier}
        })
        n.ImgProduct = productSupplier.ImgProduct;
        n.IsPromotion = productSupplier.IsPromotion;
        n.PromotionPrice = productSupplier.PromotionPrice;
        n.Score = 0;
        n.Category = 0;
        n.Stock = productSupplier.Stock;
        n.DateAdded = new Date();

        try {
         
          const savedProductSupplier = await this.productSupplierRepository.save(n);
    
          return savedProductSupplier;
        } catch (error) {
          throw new Error('Error al insertar ProductSupplier');
        }
      }
    
}
