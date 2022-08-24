import { Product } from './product.js';
import { Cover } from './types/cover.js';
declare enum Type {
    Plain = 0,
    Graph = 1
}
export declare class Album extends Product<Type> {
    width: number;
    length: number;
    constructor(width: number, length: number, cover: Cover, price?: number, name?: string);
    showData(): void;
}
export {};
