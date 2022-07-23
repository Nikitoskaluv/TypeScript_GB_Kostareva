import { Cover } from './types/cover.js'

export const cart: Product[] = [];

export class Product {
    name: string
    cover: Cover
    status?: boolean
    quantity?: number = 0
    price?: number


    constructor(name: string, cover: Cover, price?: number) {
        this.name = name
        this.cover = cover
        this.price = price
    }

    canBuy(): boolean {
        return typeof this.price === 'number'
    }
    showData(): void {
        console.log(`Товар - ${this.name}, цена - ${this.getPrice()} - тип обложки ${this.cover}`);
    }
    getPrice(): string {
        return this.price ? this.price.toString() : 'Нет в продаже'
    }
    buyProduct(product: Product): void {
        if (this.price) {
            this.status = true;
            this.quantity = this.quantity + 1;
            cart.push(product);
        } else {
            this.status = false,
                this.quantity = 0
        }
    }
}