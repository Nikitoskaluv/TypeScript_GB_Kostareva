import { Product } from "./product.js";
import { Cover } from './types/cover.js'
//Задание 2 

enum Type {
    Plain,
    Graph
}

export class Notepad extends Product<Type> {

    price?: number


    constructor(name: string, cover: Cover, id: number, price?: number) {
        super(name, cover, id, Type.Graph, price);
    }

    canBuy(): boolean {
        return typeof this.price === 'number'
    }
    showData(): void {
        super.showData();
    }
}