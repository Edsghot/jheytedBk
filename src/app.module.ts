import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './Modules/user/user.module';
import { ProductsModule } from './Modules/products/products.module';
import { ProductSupplierModule } from './Modules/product-supplier/product-supplier.module';
import { ShoppingCartModule } from './Modules/shopping-cart/shopping-cart.module';
import { CartModule } from './Modules/cart/cart.module';
import { CartItemsModule } from './Modules/cart-items/cart-items.module';
import { ChatModule } from './Modules/chat/chat.module';
import { AuthServiceModule } from './Modules/auth-login/auth-service.module';
import { AuthValidateModule } from './Modules/auth-validate/auth-validate.module';
import { CloudinaryModule } from './services/cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';


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
  }),ConfigModule.forRoot({isGlobal: true}),AuthValidateModule, UserModule, ProductsModule, ProductSupplierModule, ShoppingCartModule, CartModule, CartItemsModule, AuthServiceModule, ChatModule, CloudinaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
