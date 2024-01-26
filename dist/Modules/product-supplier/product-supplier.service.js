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
const productSupplier_entity_1 = require("../../ENTITY/ProductSuplier/productSupplier.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Products_entity_1 = require("../../ENTITY/Product/Products.entity");
const Supplier_entity_1 = require("../../ENTITY/Supplier/Supplier.entity");
let ProductSupplierService = exports.ProductSupplierService = class ProductSupplierService {
    constructor(productSupplierRepository, productRepository, supplierRepository) {
        this.productSupplierRepository = productSupplierRepository;
        this.productRepository = productRepository;
        this.supplierRepository = supplierRepository;
    }
    async getAllProductSupplier() {
        const productSuppliers = await this.productSupplierRepository.find({
            relations: ['Product', 'Supplier'],
        });
        return productSuppliers;
    }
    async createProductSupplier(productSupplier) {
        var n = new productSupplier_entity_1.ProductSupplierEntity();
        n.Product = await this.productRepository.findOne({
            where: { IdProduct: productSupplier.IdProduct }
        });
        n.Supplier = await this.supplierRepository.findOne({
            where: { IdSupplier: productSupplier.IdSupplier }
        });
        n.ImgProduct = productSupplier.ImgProduct;
        n.IsPromotion = productSupplier.IsPromotion;
        n.PromotionPrice = productSupplier.PromotionPrice;
        n.Score = 0;
        n.Category = 0;
        n.Stock = productSupplier.Stock;
        n.DateAdded = new Date();
        try {
            const savedProductSupplier = await this.productSupplierRepository.save(n);
            return savedProductSupplier;
        }
        catch (error) {
            throw new Error('Error al insertar ProductSupplier');
        }
    }
};
exports.ProductSupplierService = ProductSupplierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(productSupplier_entity_1.ProductSupplierEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(Products_entity_1.ProductEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(Supplier_entity_1.SupplierEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductSupplierService);
//# sourceMappingURL=product-supplier.service.js.map