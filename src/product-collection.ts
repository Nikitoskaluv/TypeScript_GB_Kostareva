import { Book } from './book.js'
import { Notepad } from './notepad.js'
import { Album } from './album.js'

export const books = [
  new Book('Harry Potter and the Philosopher\'s Stone', 'fantasy', 'hard', 980),
  new Book('Lord of the Ring', 'fantasy', 'hard', 1001),
  new Book('How to be productive', 'lifestyle', 'hard', 500),
  new Book('Game of Thrones', 'fantasy', 'soft'),
  new Book('Eat,pray,love', 'romance', 'soft', 1500, { name: 'Elizabeth', surname: 'Gilbert' }),

]
export const products = [
  new Notepad('Notepad one', 'hard', 777),
  new Notepad('Notepad two', 'soft'),
  new Album(15, 20, 'hard', 300)
]


