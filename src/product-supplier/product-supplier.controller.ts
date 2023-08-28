import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductSupplierService } from './product-supplier.service';
import { createProductSupplier } from './dto/createProductSupplier.dto';

@Controller('productsupplier')
export class ProductSupplierController {
    constructor(private ProductService: ProductSupplierService){}
   
    @Get()
    getUsers(){
        return this.ProductService.getAllProductSupplier();
    }

    @Post('insert')
    createUser(@Body() newProduct: createProductSupplier){
        return this.ProductService.createProductSupplier(newProduct);
    }
}
