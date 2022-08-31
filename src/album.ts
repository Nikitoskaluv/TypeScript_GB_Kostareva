import { Product } from './product.js'
import { Cover } from './types/cover.js'
//Задание 2 
enum Type {
    Plain,
    Graph
}

export class Album extends Product<Type> {

    width: number
    length: number

    constructor(width: number, length: number, cover: Cover, id: number,
        price?: number, name: string = 'Album') {
        super(name, cover, id, Type.Plain, price)
        this.width = width,
            this.length = length
    }
    showData(): void {
        console.log(`Товар - ${this.name}, цена - ${this.getPrice()} - тип обложки ${this.cover}, размер -${this.width}X${this.length}`)
    }

}