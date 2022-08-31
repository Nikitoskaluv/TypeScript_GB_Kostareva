import { Product } from './product.js';
import { IAuthor } from './types/author.js';
import { Cover } from './types/cover.js';
declare enum Type {
    New = 0,
    Old = 1
}
export declare class Book extends Product<Type> {
    name: string;
    genre: string;
    cover: Cover;
    price?: number;
    author?: IAuthor;
    constructor(name: string, genre: string, cover: Cover, price?: number, author?: IAuthor);
    showData(): void;
    getAuthor(): string;
}
export {};
