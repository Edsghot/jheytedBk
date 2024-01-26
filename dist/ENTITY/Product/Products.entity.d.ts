export declare enum TypeEnum {
    Wisky = 0,
    Rones = 1,
    Pisco = 2,
    Gaseosa = 3,
    Agua = 4
}
export declare enum ContainerTypeEnum {
    Canned = 0,
    Disposable = 1,
    Glass = 2
}
export declare class ProductEntity {
    IdProduct: number;
    Name: string;
    Flavor: string;
    Volume: string;
    Ml: string;
    Score: number;
    Bestselling: number;
    Description: string;
    Type: TypeEnum;
    ContainerType: ContainerTypeEnum;
}
