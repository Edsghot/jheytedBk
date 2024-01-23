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
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./Modules/user/user.module");
const products_module_1 = require("./Modules/products/products.module");
const product_supplier_module_1 = require("./Modules/product-supplier/product-supplier.module");
const shopping_cart_module_1 = require("./Modules/shopping-cart/shopping-cart.module");
const cart_module_1 = require("./Modules/cart/cart.module");
const cart_items_module_1 = require("./Modules/cart-items/cart-items.module");
const auth_service_module_1 = require("./Modules/auth-login/auth-service.module");
const auth_validate_module_1 = require("./modules/auth-validate/auth-validate.module");
const auth_validate_sms_module_1 = require("./modules/auth-validate-sms/auth-validate-sms.module");
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
            }), user_module_1.UserModule, products_module_1.ProductsModule, product_supplier_module_1.ProductSupplierModule, shopping_cart_module_1.ShoppingCartModule, cart_module_1.CartModule, cart_items_module_1.CartItemsModule, auth_service_module_1.AuthServiceModule, auth_validate_module_1.AuthValidateModule, auth_validate_sms_module_1.AuthValidateSmsModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map