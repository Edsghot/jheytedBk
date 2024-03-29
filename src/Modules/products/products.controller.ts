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
    
    @Get(':productId') 
    getById(@Param('productId') productId: number) { 
      return this.ProductService.getbyId(productId); 
    }

    @Get('BestSelling/:rating') 
    async getBestSelling(@Param('rating') rating: number) { 
      return await this.ProductService.getBestSelling(rating); 
    }

    @Get('BestRecommended/:rating')
    async getBestRecommended(@Param('rating') rating: number){
      return await this.ProductService.getBestRecommended(rating);
    }

    @Get('TypeContainer/:rating/:type')
    async getTypeContainer(@Param('rating') rating: number,@Param('type') type: number){
      return await this.ProductService.getTypeContainer(rating,type);
    }

    @Get('Type/:rating/:type')
    async getType(@Param('rating') rating: number,@Param('type') type: number){
      return await this.ProductService.getType(rating,type);
    }

    @Post('insert')
    createUser(@Body() newUser: createProduct){
        return this.ProductService.createProduct(newUser);
    }


    
}
