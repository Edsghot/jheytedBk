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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSupplierEntity = exports.CategoryEnum = void 0;
const typeorm_1 = require("typeorm");
const Products_entity_1 = require("../Product/Products.entity");
const Supplier_entity_1 = require("../Supplier/Supplier.entity");
var CategoryEnum;
(function (CategoryEnum) {
    CategoryEnum[CategoryEnum["normal"] = 0] = "normal";
    CategoryEnum[CategoryEnum["MasVendido"] = 1] = "MasVendido";
    CategoryEnum[CategoryEnum["Recomendado"] = 2] = "Recomendado";
})(CategoryEnum || (exports.CategoryEnum = CategoryEnum = {}));
let ProductSupplierEntity = exports.ProductSupplierEntity = class ProductSupplierEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductSupplierEntity.prototype, "IdProductSupplier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double' }),
    __metadata("design:type", Number)
], ProductSupplierEntity.prototype, "PriceProduct", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Products_entity_1.ProductEntity, product => product.IdProduct),
    (0, typeorm_1.JoinColumn)({ name: 'IdProduct' }),
    __metadata("design:type", Products_entity_1.ProductEntity)
], ProductSupplierEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Supplier_entity_1.SupplierEntity, supplier => supplier.IdSupplier),
    (0, typeorm_1.JoinColumn)({ name: 'IdSupplier' }),
    __metadata("design:type", Supplier_entity_1.SupplierEntity)
], ProductSupplierEntity.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductSupplierEntity.prototype, "ImgProduct", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], ProductSupplierEntity.prototype, "IsPromotion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: true }),
    __metadata("design:type", Number)
], ProductSupplierEntity.prototype, "PromotionPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductSupplierEntity.prototype, "Score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductSupplierEntity.prototype, "Stock", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ProductSupplierEntity.prototype, "DateAdded", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ProductSupplierEntity.prototype, "Category", void 0);
exports.ProductSupplierEntity = ProductSupplierEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'ProductSuppliers' })
], ProductSupplierEntity);
//# sourceMappingURL=productSupplier.entity.js.map