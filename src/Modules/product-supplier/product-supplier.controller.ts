import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductSupplierService } from './product-supplier.service';
import { createProductSupplierDto } from 'src/DTOs/ProductSuplier/createProductSupplier.dto';
@Controller('productsupplier')
export class ProductSupplierController {
    constructor(private ProductService: ProductSupplierService){}
   
    @Get()
    getUsers(){
        return this.ProductService.getAllProductSupplier();
    }

    @Post('insert')
  async createProductSupplier(@Body() productSupplierData: createProductSupplierDto) {

      const createdProductSupplier = await this.ProductService.createProductSupplier(productSupplierData);
      return {
        success: true,
        data: createdProductSupplier,
      };
   
  }
}
