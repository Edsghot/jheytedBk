"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const products_module_1 = require("./products/products.module");
const product_supplier_module_1 = require("./product-supplier/product-supplier.module");
const shopping_cart_module_1 = require("./shopping-cart/shopping-cart.module");
const cart_module_1 = require("./cart/cart.module");
const cart_items_module_1 = require("./cart-items/cart-items.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'ccontrolz.com',
                port: 3306,
                username: 'nibcqvah_edsghot',
                password: 'Repro123.',
                database: 'nibcqvah_Jheyted',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true
            }), user_module_1.UserModule, products_module_1.ProductsModule, product_supplier_module_1.ProductSupplierModule, shopping_cart_module_1.ShoppingCartModule, cart_module_1.CartModule, cart_items_module_1.CartItemsModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map