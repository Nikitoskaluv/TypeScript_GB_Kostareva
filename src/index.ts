
import { products, books } from './product-collection.js'
import { cart } from './product.js'
import { Product } from './product'
import { Book } from './book'

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

function getProductFromCatalog<T extends Product<T>>(array: Array<T>, title: string): T | undefined {
    const product = array.find(product => product.name.toLowerCase() === title.toLowerCase());
    return product;
}


const chosenProduct = getProductFromCatalog<Product<any>>(products, 'Notepad');
if (chosenProduct) {
    console.log(`Вы выбрали ${chosenProduct.name}`);
} else {
    console.log('Нет такого товара');
}

const chosenBook = getProductFromCatalog<Product<any>>(books, 'Lord of the Ring');
if (chosenBook) {
    console.log(`Вы выбрали ${chosenBook.name}`);
} else {
    console.log('Нет такого товара');
}





// products.forEach(product => product.showData());

// products.forEach(product => product.buyProduct(product));
// console.log(cart);





