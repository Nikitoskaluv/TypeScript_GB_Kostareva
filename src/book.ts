import { Product } from './product.js'
import { IAuthor } from './types/author.js'
import { Cover } from './types/cover.js'
//Задание 2 
enum Type {
  New,
  Old
}

export class Book extends Product<Type> {
  genre: string
  price?: number
  author?: IAuthor;




  constructor(name: string, genre: string, cover: Cover, id: number, price?: number, author?: IAuthor) {
    super(name, cover, id, Type.New, price);
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
