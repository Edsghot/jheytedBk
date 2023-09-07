"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSupplierController = void 0;
const common_1 = require("@nestjs/common");
const product_supplier_service_1 = require("./product-supplier.service");
const createProductSupplier_dto_1 = require("./dto/createProductSupplier.dto");
let ProductSupplierController = exports.ProductSupplierController = class ProductSupplierController {
    constructor(ProductService) {
        this.ProductService = ProductService;
    }
    getUsers() {
        return this.ProductService.getAllProductSupplier();
    }
    createUser(newProduct) {
        return this.ProductService.createProductSupplier(newProduct);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductSupplierController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProductSupplier_dto_1.createProductSupplier]),
    __metadata("design:returntype", void 0)
], ProductSupplierController.prototype, "createUser", null);
exports.ProductSupplierController = ProductSupplierController = __decorate([
    (0, common_1.Controller)('productsupplier'),
    __metadata("design:paramtypes", [product_supplier_service_1.ProductSupplierService])
], ProductSupplierController);
//# sourceMappingURL=product-supplier.controller.js.map