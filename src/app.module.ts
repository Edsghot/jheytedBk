import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ProductsModule } from './products/products.module';
import { ProductSupplierModule } from './product-supplier/product-supplier.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CartModule } from './cart/cart.module';
import { CartItemsModule } from './cart-items/cart-items.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ccontrolz.com',
      port: 3306,
      username: 'nibcqvah_edsghot',
      password: 'Repro123.',
      database: 'nibcqvah_Jheyted',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true

  }), ],
  controllers: [],
  providers: [],
})
export class AppModule {}
