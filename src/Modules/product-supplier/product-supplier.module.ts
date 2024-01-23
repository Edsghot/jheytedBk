import { Module } from '@nestjs/common';
import { ProductSupplierController } from './product-supplier.controller';
import { ProductSupplierService } from './product-supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSupplierEntity } from '../../ENTITY/ProductSuplier/productSupplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSupplierEntity])],
  controllers: [ProductSupplierController],
  providers: [ProductSupplierService]
})
export class ProductSupplierModule {}
