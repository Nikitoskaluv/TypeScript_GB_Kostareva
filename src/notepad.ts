import { Product } from "./product.js";
import { Cover } from './types/cover.js'

export class Notepad extends Product {
    name: string
    cover: Cover
    price?: number


    constructor(name: string, cover: Cover, price?: number) {
        super(name, cover, price);
    }

    canBuy(): boolean {
        return typeof this.price === 'number'
    }
    showData(): void {
        super.showData();
    }
}