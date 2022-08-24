import { Cover } from '../types/cover.js'
export interface IProduct<T = any> {
    name: string
    cover: Cover
    id: number
    status?: boolean
    quantity?: number
    price?: number
    type: T

    canBuy(): boolean
    showData(): void
    getPrice(): string
    buyProduct(product: IProduct<any>): void
}