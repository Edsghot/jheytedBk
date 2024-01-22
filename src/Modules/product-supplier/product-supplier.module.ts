import { Module } from '@nestjs/common';
import { ProductSupplierController } from './product-supplier.controller';
import { ProductSupplierService } from './product-supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSupplier } from '../../ENTITY/ProductSuplier/productSupplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSupplier])],
  controllers: [ProductSupplierController],
  providers: [ProductSupplierService]
})
export class ProductSupplierModule {}
