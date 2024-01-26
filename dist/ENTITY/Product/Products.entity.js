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
exports.ProductEntity = exports.ContainerTypeEnum = exports.TypeEnum = void 0;
const typeorm_1 = require("typeorm");
var TypeEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["Wisky"] = 0] = "Wisky";
    TypeEnum[TypeEnum["Rones"] = 1] = "Rones";
    TypeEnum[TypeEnum["Pisco"] = 2] = "Pisco";
    TypeEnum[TypeEnum["Gaseosa"] = 3] = "Gaseosa";
    TypeEnum[TypeEnum["Agua"] = 4] = "Agua";
})(TypeEnum || (exports.TypeEnum = TypeEnum = {}));
var ContainerTypeEnum;
(function (ContainerTypeEnum) {
    ContainerTypeEnum[ContainerTypeEnum["Canned"] = 0] = "Canned";
    ContainerTypeEnum[ContainerTypeEnum["Disposable"] = 1] = "Disposable";
    ContainerTypeEnum[ContainerTypeEnum["Glass"] = 2] = "Glass";
})(ContainerTypeEnum || (exports.ContainerTypeEnum = ContainerTypeEnum = {}));
let ProductEntity = exports.ProductEntity = class ProductEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "IdProduct", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], ProductEntity.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "Flavor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "Volume", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "Ml", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "Score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "Bestselling", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "Description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "ContainerType", void 0);
exports.ProductEntity = ProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Products' })
], ProductEntity);
//# sourceMappingURL=Products.entity.js.map