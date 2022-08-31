import { Cover } from './types/cover.js';
import { IProduct } from './types/productI';
export declare const cart: Product<any>[];
export declare class Product<T = any> implements IProduct<T> {
    name: string;
    cover: Cover;
    status?: boolean;
    quantity?: number;
    price?: number;
    type: T;
    constructor(name: string, cover: Cover, type: T, price?: number);
    canBuy(): boolean;
    showData(): void;
    getPrice(): string;
    buyProduct(product: Product<any>): void;
}
