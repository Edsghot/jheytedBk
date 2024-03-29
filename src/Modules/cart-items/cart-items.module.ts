import { Module } from '@nestjs/common';
import { CartItemsController } from './cart-items.controller';
import { CartItemsService } from './cart-items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from '../../ENTITY/CarItems/cartItems.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem])],
  controllers: [CartItemsController],
  providers: [CartItemsService]
})
export class CartItemsModule {}
