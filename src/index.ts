
import { products, books } from './product-collection.js'
import { cart } from './product.js'
import { Product } from './product.js'
import { Book } from './book.js'
import { MyMap } from './common/MyMap.js'
import { map } from './product-collection.js'

// import { Notepad } from './notepad.js'
// import { Album } from './album.js'
// import { Product } from './product.js'
// import { Book } from './book.js'


// function findSuitableBook(genre: string, pagesLimit: number, multipleRecommendations = true): Book | Book[] {
//   const findAlgorithm = (book: Book) => {
//     return book.genre === genre && book.price <= pagesLimit
//   }

//   if (multipleRecommendations) {
//     return books.filter(findAlgorithm)
//   } else {
//     return books.find(findAlgorithm)
//   }
// }
// const recommendedBook = findSuitableBook('fantasy', 1000)
// if (recommendedBook instanceof Book) {
//   console.log(recommendedBook.name)
// } else {
//   console.log(recommendedBook[0].name)
// }

// books.forEach(book => console.log(book.name, book.canBuy()));

// function showData(product: unknown): void {
//   if (product instanceof Book) {
//     console.log(`${product.name} - ${product.genre} - ${getAuthor(product)} - ${product.canBuy()}`)
//   } else if (product instanceof Notepad) {
//     console.log(`${product.name} - ${product.canBuy()} - ${getPrice(product)}`)
//   } else if (product instanceof Album) {
//     console.log(`${product.name}-${product.canBuy()}-${product.width}X${product.length}`)
//   } else {
//     console.error('Error.Unknown type');
//   }
// }
// function getPrice(product: Book | Notepad): string {
//   return product.price ? product.price.toString() : 'Нет в продаже'
// }

// function getAuthor(product: Book): string {
//   return product.author ? product.author.name + product.author.surname : 'Автор не указан'
// }


// Задание 1 функция  getFrom 
function getProductFromCatalog<Type extends MyMap, T extends Product>(obj: Type, id: number): T | undefined {
    return obj.get(id);
}
const chosenProduct = getProductFromCatalog<MyMap, Product>(map, 2);

if (chosenProduct) {
    console.log(`Вы выбрали ${chosenProduct.name}`);
} else {
    console.log('Нет такого товара');
}



// Задание 3 корзина и функция 
const cartWithMap = new MyMap<number, Product>();

function getProductsForCart<Type extends MyMap>(obj: Type, id: number, productForCart: Product, Q: number): Type | undefined {
    obj.set(id, productForCart);
    obj.get(id)['orderedQuantity'] = Q;
    return obj;
}
getProductsForCart(cartWithMap, 1, new Book('Lord of the Ring', 'fantasy', 'hard', 1001), 3);
getProductsForCart(cartWithMap, 2, new Book('Game of Thrones', 'fantasy', 'soft', 220), 2);

console.log(`Корзина ${JSON.stringify(cartWithMap)}`);





// const chosenBook = getProductFromCatalog<Product<any>>(books, 3);
// if (chosenBook) {
//     console.log(`Вы выбрали ${ chosenBook.name } `);
// } else {
//     console.log('Нет такого товара');
// }


// products.forEach(product => product.showData());

// products.forEach(product => product.buyProduct(product));
// console.log(cart);





