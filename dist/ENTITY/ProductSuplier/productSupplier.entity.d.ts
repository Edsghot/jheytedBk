import { ProductEntity } from "../Product/Products.entity";
import { SupplierEntity } from "../Supplier/Supplier.entity";
export declare enum CategoryEnum {
    normal = 0,
    MasVendido = 1,
    Recomendado = 2
}
export declare class ProductSupplierEntity {
    IdProductSupplier: number;
    PriceProduct: number;
    Product: ProductEntity;
    Supplier: SupplierEntity;
    ImgProduct: string;
    IsPromotion: boolean;
    PromotionPrice: number;
    Score: number;
    Stock: number;
    DateAdded: Date;
    Category: CategoryEnum;
}
