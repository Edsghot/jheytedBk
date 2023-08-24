import { Module } from '@nestjs/common';
import { ProductSupplierController } from './product-supplier.controller';
import { ProductSupplierService } from './product-supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [ProductSupplierController],
  providers: [ProductSupplierService]
})
export class ProductSupplierModule {}
