import { Book } from './book.js';
import { Notepad } from './notepad.js';
import { Album } from './album.js';
import { Product } from './product.js';
import { MyMap } from './common/MyMap.js';
export declare const books: {
    1: Book;
    2: Book;
    3: Book;
    4: Book;
    5: Book;
};
export declare const products: {
    1: Notepad;
    2: Notepad;
    3: Album;
};
export declare const map: MyMap<number, Product<any>>;
