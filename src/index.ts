
import { products, books } from './product-collection.js'
import { User } from './userClass.js';
import { Logger } from './common/Logger.js'
// import { cart } from './product.js'
// import { Product } from './product.js'
import { Book } from './book.js'
// import { MyMap } from './common/MyMap.js'
// import { map } from './product-collection.js'
// import { toUpperCase } from './string-helper.js'
// import { IBook, IOptions, search } from 'google-books-search'
// import { Notepad } from './notepad.js'
// import { Album } from './album.js'
import { Product } from './product.js'
// import { Book } from './book.js'



const main = () => {

    function getGenreIcon(num: 1 | 2): number {
        let code: number;
        switch (num) {
            case 1:
                code = 1;
                break;
            case 2:
                code = 2;
                break;
            default:
                code = 3

        }
        return code
    }
    console.log(getGenreIcon(2));


    const getNumber = (num: number | string): number => {
        if (typeof num === 'number') {
            return num
        } else {
            num
        }
        return 100;
    }


    try {
        throw 'error';
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        if (typeof error === 'string') {
            console.log(error.toUpperCase());
        }
    }


    const Person = {
        age: 40,
        getAge: function (num: number) {
            return this.age * num
        }
    }
    const Andrey = {
        age: 21,
    }
    console.log(Person.getAge.call(Andrey, 5));

}
main();



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
// function getProductFromCatalog<Type extends MyMap, T extends Product>(obj: Type, id: number): T | undefined {
//     return obj.get(id);
// }
// const chosenProduct = getProductFromCatalog<MyMap, Product>(map, 2);

// if (chosenProduct) {
//     console.log(`Вы выбрали ${chosenProduct.name}`);
// } else {
//     console.log('Нет такого товара');
// }



// Задание 3 корзина и функция 
// const cartWithMap = new MyMap<number, Product>();

// function getProductsForCart<Type extends MyMap>(obj: Type, id: number, productForCart: Product, Q: number): Type | undefined {
//     obj.set(id, productForCart);
//     obj.get(id)['orderedQuantity'] = Q;
//     return obj;
// }
// getProductsForCart(cartWithMap, 1, new Book('Lord of the Ring', 'fantasy', 'hard', 1001), 3);
// getProductsForCart(cartWithMap, 2, new Book('Game of Thrones', 'fantasy', 'soft', 220), 2);

// console.log(`Корзина ${JSON.stringify(cartWithMap)}`);


// const chosenBook = getProductFromCatalog<Product<any>>(books, 3);
// if (chosenBook) {
//     console.log(`Вы выбрали ${ chosenBook.name } `);
// } else {
//     console.log('Нет такого товара');
// }


// products.forEach(product => product.showData());

// products.forEach(product => product.buyProduct(product));
// console.log(cart);



// console.log(toUpperCase('ssds'));

// const searchBooks = (query: string, options: IOptions = {}): Promise<IBook[]> => new Promise((resolve, reject) => {
//     search(query, options, (error, result) => {
//         // reject(new Error('some error'))
//         if (error) {
//             reject(error);
//         } else {
//             resolve(result);
//         }
//     })
// })
// const main = async () => {
//     searchBooks("Harry Potter")
//         .then(books => {
//             console.log(books);
//             return books;
//         })
//         .catch(error => {
//             console.log("Ошибка", error)
//             return error;
//         });
// }

// const main = async () => {
//     try {
//         const books = await searchBooks('Harry Poter');
//         console.log(books);
//     } catch (error) {
//         console.log(error);
//     }

//     console.log('1');
// }

// main();


// search('Harry Poter', {
//     limit: 2
// }, (error, result) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.dir(result, { depth: null, colors: true })
//     }
// });

// const user1 = new User('Jane', 'Daw', 'Jane@Daw', '12.10.1989', 'DDDDDD');
// console.log(`Пользователь ${JSON.stringify(user1)}`);
// user1.addToCart(100, books);
// user1.addToCart(101, books);
// user1.addToCart(100, books);
// user1.addToCart(103, books);
// user1.addToCart(102, books);
// user1.removeFromCart(103);
// user1.removeFromCart(102);
// user1.removeFromCart(105);
// user1.removeFromCart(100);
// user1.removeFromCart(100);
// user1.removeFromCart(100);


// console.log(`Сумма ${user1.countTotal()}`);
// console.log(`Корзина ${JSON.stringify(user1.cart)}`);

// console.log(books, products);


