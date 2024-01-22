import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './Modules/user/user.module';
import { ProductsModule } from './Modules/products/products.module';
import { ProductSupplierModule } from './Modules/product-supplier/product-supplier.module';
import { ShoppingCartModule } from './Modules/shopping-cart/shopping-cart.module';
import { CartModule } from './Modules/cart/cart.module';
import { CartItemsModule } from './Modules/cart-items/cart-items.module';
import { AuthServiceModule } from './Modules/auth-login/auth-service.module';

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
  }), UserModule, ProductsModule, ProductSupplierModule, ShoppingCartModule, CartModule, CartItemsModule, AuthServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
