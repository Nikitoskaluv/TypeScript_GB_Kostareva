import { Book } from './book.js'
import { Notepad } from './notepad.js'
import { Album } from './album.js'
import { Product } from './product.js'
import { MyMap } from './common/MyMap.js'

export const books = {
  1: new Book('Harry Potter and the Philosopher\'s Stone', 'fantasy', 'hard', 980),
  2: new Book('Lord of the Ring', 'fantasy', 'hard', 1001),
  3: new Book('How to be productive', 'lifestyle', 'hard', 500),
  4: new Book('Game of Thrones', 'fantasy', 'soft'),
  5: new Book('Eat,pray,love', 'romance', 'soft', 1500, { name: 'Elizabeth', surname: 'Gilbert' }),
}


export const products = {
  1: new Notepad('Notepad one', 'hard', 777),
  2: new Notepad('Notepad two', 'soft'),
  3: new Album(15, 20, 'hard', 300)
}

export const map = new MyMap<number, Product>();

// map.set(1, new Book('Lord of the Ring', 'fantasy', 'hard', 1001));
// map.set(2, new Notepad('Notepad one', 'hard', 777));



//Задание 4 метод setAll 
const arayOfProducts: Array<{}> = [{ 1: new Book('Harry Potter and the Philosopher\'s Stone', 'fantasy', 'hard', 980) },
{ 2: new Book('Lord of the Ring', 'fantasy', 'hard', 1001) },
{ 3: new Book('How to be productive', 'lifestyle', 'hard', 500) },
{ 4: new Book('Game of Thrones', 'fantasy', 'soft') },
{ 5: new Book('Eat,pray,love', 'romance', 'soft', 1500, { name: 'Elizabeth', surname: 'Gilbert' }) },
{ 6: new Notepad('Notepad one', 'hard', 777) },
{ 7: new Notepad('Notepad two', 'soft') },
{ 9: new Album(15, 20, 'hard', 300) }
];

map.setAll(arayOfProducts);
console.log(`Товары ${JSON.stringify(map.getAll())}`);

//Проверка методов класса MyMap с урока 
// console.log(`Два товара ${JSON.stringify(map.getAll())}`);
// console.log(`Есть такой тоавр ${map.has(3)}`);
// console.log(`Получить такой тоавр ${map.get(3)}`);
// console.log(`Есть такой товар ${map.has(3)}`);
// console.log(`Удалить такой тоавр ${map.remove(1)}`);
// console.log(`Один товар ${JSON.stringify(map.getAll())}`);
// map.set(1, new Book('How to be productive', 'lifestyle', 'hard', 500));
// console.log(`Два товара ${JSON.stringify(map.getAll())}`);
// map.clear();
// console.log(`Нет товаров ${JSON.stringify(map.getAll())}`);



