import { Product } from "./product.js";
import { Cover } from './types/cover.js';
declare enum Type {
    Plain = 0,
    Graph = 1
}
export declare class Notepad extends Product<Type> {
    name: string;
    cover: Cover;
    price?: number;
    constructor(name: string, cover: Cover, price?: number);
    canBuy(): boolean;
    showData(): void;
}
export {};
