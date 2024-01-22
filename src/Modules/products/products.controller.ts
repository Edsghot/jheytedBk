import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProduct } from '../../DTOs/Product/createProducto.dto';

@Controller('products')
export class ProductsController {
    constructor(private ProductService: ProductsService){}
   
    @Get()
    getUsers(){
        return this.ProductService.getAllProduct();
    }
    
    @Get(':productId') // Define la ruta completa, ej: /products/1
    getById(@Param('productId') productId: number) { // Usa @Param('nombreDelParametro') para obtener el valor
      return this.ProductService.getbyId(productId); // Llama al método en el servicio
    }

    @Post('insert')
    createUser(@Body() newUser: createProduct){
        return this.ProductService.createProduct(newUser);
    }
    
}
