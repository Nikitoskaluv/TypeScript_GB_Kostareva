import { Cover } from './types/cover.js'
import { IProduct } from './types/productI'
import { Review } from './types/reviewI.js';

//Задание 2 
export const cart: Product<any>[] = [];

export class Product<T = any>  {
    name: string
    cover: Cover
    id: number
    status?: boolean
    quantity?: number = 0
    protected price?: number
    type: T
    private _reviews: Review[] = []
    private _score: number = 0



    constructor(name: string, cover: Cover, id: number, type: T, price?: number) {
        this.name = name
        this.cover = cover
        this.price = price
        this.type = type
        this.id = id

    }
    get score() {
        return this._score
    }
    get reviews(): Readonly<Review[]> {
        return this._reviews
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
    addReview(review: Review) {
        this._reviews.push(review);
        this._score = this._reviews.reduce<number>((acc, review) => {
            return acc + review.score;
        }, 0) / this._reviews.length
    }
}