import { Module } from '@nestjs/common';
import { ProductSupplierController } from './product-supplier.controller';
import { ProductSupplierService } from './product-supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSupplierEntity } from '../../ENTITY/ProductSuplier/productSupplier.entity';
import { ProductEntity } from 'src/ENTITY/Product/Products.entity';
import { SupplierEntity } from 'src/ENTITY/Supplier/Supplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSupplierEntity]),TypeOrmModule.forFeature([ProductEntity]),TypeOrmModule.forFeature([SupplierEntity])],
  controllers: [ProductSupplierController],
  providers: [ProductSupplierService]
})
export class ProductSupplierModule {}
