import { Product } from './product.js'
import { IAuthor } from './types/author.js'
import { Cover } from './types/cover.js'
enum Type {
  New,
  Old
}

export class Book extends Product<Type> {
  name: string
  genre: string
  cover: Cover
  price?: number
  author?: IAuthor;




  constructor(name: string, genre: string, cover: Cover, price?: number, author?: IAuthor) {
    super(name, cover, Type.New, price);
    this.genre = genre,
      this.author = author
  }
  showData(): void {
    console.log(`Товар - ${this.name}, цена - ${this.getPrice()} - тип обложки ${this.cover},жанр - ${this.genre}, автор - ${this.getAuthor()}`)
  }
  getAuthor(): string {
    return this.author ? this.author.name + ' ' + this.author.surname : 'Автор не указан'
  }

}
