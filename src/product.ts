import { Cover } from './types/cover.js'
import { IProduct } from './types/productI'

export const cart: Product<any>[] = [];

export class Product<T> implements IProduct<T> {
    name: string
    cover: Cover
    status?: boolean
    quantity?: number = 0
    price?: number
    type: T


    constructor(name: string, cover: Cover, type: T, price?: number) {
        this.name = name
        this.cover = cover
        this.price = price
        this.type = type
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
    buyProduct(product: Product<any>): void {
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