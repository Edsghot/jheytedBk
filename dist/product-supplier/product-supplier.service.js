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
exports.ProductSupplierService = void 0;
const common_1 = require("@nestjs/common");
const productSupplier_entity_1 = require("./entity/productSupplier.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProductSupplierService = exports.ProductSupplierService = class ProductSupplierService {
    constructor(productSupplierRepository) {
        this.productSupplierRepository = productSupplierRepository;
    }
    createProductSupplier(productSupplier) {
        const newProductSupplier = this.productSupplierRepository.create(productSupplier);
        return this.productSupplierRepository.save(newProductSupplier);
    }
    getAllProductSupplier() {
        return this.productSupplierRepository.find();
    }
};
exports.ProductSupplierService = ProductSupplierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(productSupplier_entity_1.ProductSupplier)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductSupplierService);
//# sourceMappingURL=product-supplier.service.js.map