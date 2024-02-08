import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../../ENTITY/Product/Products.entity';
import { createProduct } from '../../DTOs/Product/createProducto.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>){}

    
    createProduct(product: createProduct){
       try{
        const newProduct = this.productRepository.create(product)
        return {msg: "Se creo correctamente",
        value: this.productRepository.save(newProduct)}
       }catch(e){
            return {
                msg: "Error al agregar el producto: "+e,
                value: null,
                sucess: false
            }
       } 
    }

    getAllProduct(){
        return this.productRepository.find();
    }
    getbyId(productId: number){
        return this.productRepository.findOne({
            where: { IdProduct:productId}
          });
        
    }

    async getBestSelling(rating: number){
        try{

            const results = await this.productRepository.query(`CALL SP_ObtenerProductoMasVendido(${rating})`);
            
            if (results && results.length > 0 && Array.isArray(results[0])) {
                return {
                    msg: "se encontraron estos productos",
                    value: results[0]
                };
            } else {
                return {
                    msg: "no se encontraron los productos",
                    value: results[0]
                };
            }
            
        }catch(e){
            return {
                msg: "Error al consumir el store procedure",
                value: null
            };
        }
    }
    
    async getBestRecommended(rating: number){
        try{

            const results = await this.productRepository.query(`CALL SP_ObtenerProductRecomendaded(${rating})`);
            
            if (results && results.length > 0 && Array.isArray(results[0])) {
                return {
                    msg: "se encontraron estos productos",
                    value: results[0]
                };
            } else {
                return {
                    msg: "no se encontraron los productos",
                    value: results[0]
                };
            }
            
        }catch(e){
            return {
                msg: "Error al consumir el store procedure",
                value: null
            };
        }
    }
    
}
