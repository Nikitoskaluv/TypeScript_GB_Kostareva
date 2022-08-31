"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./common/Logger");
// import { cart } from './product.js'
// import { Product } from './product.js'
const book_js_1 = require("./book.js");
// import { MyMap } from './common/MyMap.js'
// import { map } from './product-collection.js'
// import { toUpperCase } from './string-helper.js'
// import { IBook, IOptions, search } from 'google-books-search'
// import { Notepad } from './notepad.js'
// import { Album } from './album.js'
// import { Product } from './product.js'
// import { Book } from './book.js'
const main = () => {
    const logger = new Logger_1.Logger();
    const book = new book_js_1.Book('Harry Potter and the Philosopher\'s Stone', 'fantasy', 'hard', 100, 980);
    console.log(book);
    book.addReview({
        author: 'Andrey',
        text: 'Text',
        score: 4
    });
    book.addReview({
        author: 'Irina',
        text: 'Text',
        score: 2
    });
    logger.info(book.name);
    logger.error('some error');
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSw0Q0FBeUM7QUFDekMsc0NBQXNDO0FBQ3RDLHlDQUF5QztBQUN6Qyx1Q0FBZ0M7QUFDaEMsNENBQTRDO0FBQzVDLGdEQUFnRDtBQUNoRCxtREFBbUQ7QUFDbkQsZ0VBQWdFO0FBQ2hFLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMseUNBQXlDO0FBQ3pDLG1DQUFtQztBQUVuQyxNQUFNLElBQUksR0FBRyxHQUFHLEVBQUU7SUFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0lBRTVCLE1BQU0sSUFBSSxHQUFHLElBQUksY0FBSSxDQUFDLDJDQUEyQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNYLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ1gsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUUvQixDQUFDLENBQUE7QUFDRCxJQUFJLEVBQUUsQ0FBQztBQU9QLGdIQUFnSDtBQUNoSCw0Q0FBNEM7QUFDNUMsOERBQThEO0FBQzlELE1BQU07QUFFTixtQ0FBbUM7QUFDbkMseUNBQXlDO0FBQ3pDLGFBQWE7QUFDYix1Q0FBdUM7QUFDdkMsTUFBTTtBQUNOLElBQUk7QUFDSiw0REFBNEQ7QUFDNUQseUNBQXlDO0FBQ3pDLHNDQUFzQztBQUN0QyxXQUFXO0FBQ1gseUNBQXlDO0FBQ3pDLElBQUk7QUFFSixnRUFBZ0U7QUFFaEUsOENBQThDO0FBQzlDLG1DQUFtQztBQUNuQyxzR0FBc0c7QUFDdEcsNkNBQTZDO0FBQzdDLGtGQUFrRjtBQUNsRiwyQ0FBMkM7QUFDM0MsNEZBQTRGO0FBQzVGLGFBQWE7QUFDYiwyQ0FBMkM7QUFDM0MsTUFBTTtBQUNOLElBQUk7QUFDSix1REFBdUQ7QUFDdkQsc0VBQXNFO0FBQ3RFLElBQUk7QUFFSiw4Q0FBOEM7QUFDOUMsNkZBQTZGO0FBQzdGLElBQUk7QUFHSiw4QkFBOEI7QUFDOUIsZ0hBQWdIO0FBQ2hILDBCQUEwQjtBQUMxQixJQUFJO0FBQ0osdUVBQXVFO0FBRXZFLHVCQUF1QjtBQUN2Qix1REFBdUQ7QUFDdkQsV0FBVztBQUNYLHdDQUF3QztBQUN4QyxJQUFJO0FBSUosK0JBQStCO0FBQy9CLG9EQUFvRDtBQUVwRCxpSUFBaUk7QUFDakksbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyxrQkFBa0I7QUFDbEIsSUFBSTtBQUNKLGdHQUFnRztBQUNoRyw4RkFBOEY7QUFFOUYseURBQXlEO0FBR3pELG9FQUFvRTtBQUNwRSxvQkFBb0I7QUFDcEIsdURBQXVEO0FBQ3ZELFdBQVc7QUFDWCx3Q0FBd0M7QUFDeEMsSUFBSTtBQUdKLG1EQUFtRDtBQUVuRCw0REFBNEQ7QUFDNUQscUJBQXFCO0FBSXJCLG9DQUFvQztBQUVwQyxzSEFBc0g7QUFDdEgsa0RBQWtEO0FBQ2xELDZDQUE2QztBQUM3Qyx1QkFBdUI7QUFDdkIsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQiwrQkFBK0I7QUFDL0IsWUFBWTtBQUNaLFNBQVM7QUFDVCxLQUFLO0FBQ0wsNkJBQTZCO0FBQzdCLGtDQUFrQztBQUNsQywyQkFBMkI7QUFDM0Isa0NBQWtDO0FBQ2xDLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsNEJBQTRCO0FBQzVCLDJDQUEyQztBQUMzQyw0QkFBNEI7QUFDNUIsY0FBYztBQUNkLElBQUk7QUFFSiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLDBEQUEwRDtBQUMxRCw4QkFBOEI7QUFDOUIsd0JBQXdCO0FBQ3hCLDhCQUE4QjtBQUM5QixRQUFRO0FBRVIsd0JBQXdCO0FBQ3hCLElBQUk7QUFFSixVQUFVO0FBR1YsMEJBQTBCO0FBQzFCLGVBQWU7QUFDZiwwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ25CLDhCQUE4QjtBQUM5QixlQUFlO0FBQ2YsNkRBQTZEO0FBQzdELFFBQVE7QUFDUixNQUFNO0FBRU4sNkVBQTZFO0FBQzdFLHdEQUF3RDtBQUN4RCwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBRzdCLDhDQUE4QztBQUM5Qyx3REFBd0Q7QUFFeEQsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBwcm9kdWN0cywgYm9va3MgfSBmcm9tICcuL3Byb2R1Y3QtY29sbGVjdGlvbi5qcydcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXJDbGFzcy5qcyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2NvbW1vbi9Mb2dnZXInO1xuLy8gaW1wb3J0IHsgY2FydCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbi8vIGltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG5pbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuLy8gaW1wb3J0IHsgTXlNYXAgfSBmcm9tICcuL2NvbW1vbi9NeU1hcC5qcydcbi8vIGltcG9ydCB7IG1hcCB9IGZyb20gJy4vcHJvZHVjdC1jb2xsZWN0aW9uLmpzJ1xuLy8gaW1wb3J0IHsgdG9VcHBlckNhc2UgfSBmcm9tICcuL3N0cmluZy1oZWxwZXIuanMnXG4vLyBpbXBvcnQgeyBJQm9vaywgSU9wdGlvbnMsIHNlYXJjaCB9IGZyb20gJ2dvb2dsZS1ib29rcy1zZWFyY2gnXG4vLyBpbXBvcnQgeyBOb3RlcGFkIH0gZnJvbSAnLi9ub3RlcGFkLmpzJ1xuLy8gaW1wb3J0IHsgQWxidW0gfSBmcm9tICcuL2FsYnVtLmpzJ1xuLy8gaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbi8vIGltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2Jvb2suanMnXG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuXG4gICAgY29uc3QgYm9vayA9IG5ldyBCb29rKCdIYXJyeSBQb3R0ZXIgYW5kIHRoZSBQaGlsb3NvcGhlclxcJ3MgU3RvbmUnLCAnZmFudGFzeScsICdoYXJkJywgMTAwLCA5ODApO1xuICAgIGNvbnNvbGUubG9nKGJvb2spO1xuXG4gICAgYm9vay5hZGRSZXZpZXcoe1xuICAgICAgICBhdXRob3I6ICdBbmRyZXknLFxuICAgICAgICB0ZXh0OiAnVGV4dCcsXG4gICAgICAgIHNjb3JlOiA0XG4gICAgfSk7XG4gICAgYm9vay5hZGRSZXZpZXcoe1xuICAgICAgICBhdXRob3I6ICdJcmluYScsXG4gICAgICAgIHRleHQ6ICdUZXh0JyxcbiAgICAgICAgc2NvcmU6IDJcbiAgICB9KTtcblxuICAgIGxvZ2dlci5pbmZvKGJvb2submFtZSk7XG4gICAgbG9nZ2VyLmVycm9yKCdzb21lIGVycm9yJyk7XG5cbn1cbm1haW4oKTtcblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGZpbmRTdWl0YWJsZUJvb2soZ2VucmU6IHN0cmluZywgcGFnZXNMaW1pdDogbnVtYmVyLCBtdWx0aXBsZVJlY29tbWVuZGF0aW9ucyA9IHRydWUpOiBCb29rIHwgQm9va1tdIHtcbi8vICAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiB7XG4vLyAgICAgcmV0dXJuIGJvb2suZ2VucmUgPT09IGdlbnJlICYmIGJvb2sucHJpY2UgPD0gcGFnZXNMaW1pdFxuLy8gICB9XG5cbi8vICAgaWYgKG11bHRpcGxlUmVjb21tZW5kYXRpb25zKSB7XG4vLyAgICAgcmV0dXJuIGJvb2tzLmZpbHRlcihmaW5kQWxnb3JpdGhtKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiBib29rcy5maW5kKGZpbmRBbGdvcml0aG0pXG4vLyAgIH1cbi8vIH1cbi8vIGNvbnN0IHJlY29tbWVuZGVkQm9vayA9IGZpbmRTdWl0YWJsZUJvb2soJ2ZhbnRhc3knLCAxMDAwKVxuLy8gaWYgKHJlY29tbWVuZGVkQm9vayBpbnN0YW5jZW9mIEJvb2spIHtcbi8vICAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rLm5hbWUpXG4vLyB9IGVsc2Uge1xuLy8gICBjb25zb2xlLmxvZyhyZWNvbW1lbmRlZEJvb2tbMF0ubmFtZSlcbi8vIH1cblxuLy8gYm9va3MuZm9yRWFjaChib29rID0+IGNvbnNvbGUubG9nKGJvb2submFtZSwgYm9vay5jYW5CdXkoKSkpO1xuXG4vLyBmdW5jdGlvbiBzaG93RGF0YShwcm9kdWN0OiB1bmtub3duKTogdm9pZCB7XG4vLyAgIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQm9vaykge1xuLy8gICAgIGNvbnNvbGUubG9nKGAke3Byb2R1Y3QubmFtZX0gLSAke3Byb2R1Y3QuZ2VucmV9IC0gJHtnZXRBdXRob3IocHJvZHVjdCl9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfWApXG4vLyAgIH0gZWxzZSBpZiAocHJvZHVjdCBpbnN0YW5jZW9mIE5vdGVwYWQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfSAtICR7Z2V0UHJpY2UocHJvZHVjdCl9YClcbi8vICAgfSBlbHNlIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQWxidW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9LSR7cHJvZHVjdC5jYW5CdXkoKX0tJHtwcm9kdWN0LndpZHRofVgke3Byb2R1Y3QubGVuZ3RofWApXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IuVW5rbm93biB0eXBlJyk7XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGdldFByaWNlKHByb2R1Y3Q6IEJvb2sgfCBOb3RlcGFkKTogc3RyaW5nIHtcbi8vICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPyBwcm9kdWN0LnByaWNlLnRvU3RyaW5nKCkgOiAn0J3QtdGCINCyINC/0YDQvtC00LDQttC1J1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRBdXRob3IocHJvZHVjdDogQm9vayk6IHN0cmluZyB7XG4vLyAgIHJldHVybiBwcm9kdWN0LmF1dGhvciA/IHByb2R1Y3QuYXV0aG9yLm5hbWUgKyBwcm9kdWN0LmF1dGhvci5zdXJuYW1lIDogJ9CQ0LLRgtC+0YAg0L3QtSDRg9C60LDQt9Cw0L0nXG4vLyB9XG5cblxuLy8g0JfQsNC00LDQvdC40LUgMSDRhNGD0L3QutGG0LjRjyAgZ2V0RnJvbSBcbi8vIGZ1bmN0aW9uIGdldFByb2R1Y3RGcm9tQ2F0YWxvZzxUeXBlIGV4dGVuZHMgTXlNYXAsIFQgZXh0ZW5kcyBQcm9kdWN0PihvYmo6IFR5cGUsIGlkOiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbi8vICAgICByZXR1cm4gb2JqLmdldChpZCk7XG4vLyB9XG4vLyBjb25zdCBjaG9zZW5Qcm9kdWN0ID0gZ2V0UHJvZHVjdEZyb21DYXRhbG9nPE15TWFwLCBQcm9kdWN0PihtYXAsIDIpO1xuXG4vLyBpZiAoY2hvc2VuUHJvZHVjdCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGDQktGLINCy0YvQsdGA0LDQu9C4ICR7Y2hvc2VuUHJvZHVjdC5uYW1lfWApO1xuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZygn0J3QtdGCINGC0LDQutC+0LPQviDRgtC+0LLQsNGA0LAnKTtcbi8vIH1cblxuXG5cbi8vINCX0LDQtNCw0L3QuNC1IDMg0LrQvtGA0LfQuNC90LAg0Lgg0YTRg9C90LrRhtC40Y8gXG4vLyBjb25zdCBjYXJ0V2l0aE1hcCA9IG5ldyBNeU1hcDxudW1iZXIsIFByb2R1Y3Q+KCk7XG5cbi8vIGZ1bmN0aW9uIGdldFByb2R1Y3RzRm9yQ2FydDxUeXBlIGV4dGVuZHMgTXlNYXA+KG9iajogVHlwZSwgaWQ6IG51bWJlciwgcHJvZHVjdEZvckNhcnQ6IFByb2R1Y3QsIFE6IG51bWJlcik6IFR5cGUgfCB1bmRlZmluZWQge1xuLy8gICAgIG9iai5zZXQoaWQsIHByb2R1Y3RGb3JDYXJ0KTtcbi8vICAgICBvYmouZ2V0KGlkKVsnb3JkZXJlZFF1YW50aXR5J10gPSBRO1xuLy8gICAgIHJldHVybiBvYmo7XG4vLyB9XG4vLyBnZXRQcm9kdWN0c0ZvckNhcnQoY2FydFdpdGhNYXAsIDEsIG5ldyBCb29rKCdMb3JkIG9mIHRoZSBSaW5nJywgJ2ZhbnRhc3knLCAnaGFyZCcsIDEwMDEpLCAzKTtcbi8vIGdldFByb2R1Y3RzRm9yQ2FydChjYXJ0V2l0aE1hcCwgMiwgbmV3IEJvb2soJ0dhbWUgb2YgVGhyb25lcycsICdmYW50YXN5JywgJ3NvZnQnLCAyMjApLCAyKTtcblxuLy8gY29uc29sZS5sb2coYNCa0L7RgNC30LjQvdCwICR7SlNPTi5zdHJpbmdpZnkoY2FydFdpdGhNYXApfWApO1xuXG5cbi8vIGNvbnN0IGNob3NlbkJvb2sgPSBnZXRQcm9kdWN0RnJvbUNhdGFsb2c8UHJvZHVjdDxhbnk+Pihib29rcywgMyk7XG4vLyBpZiAoY2hvc2VuQm9vaykge1xuLy8gICAgIGNvbnNvbGUubG9nKGDQktGLINCy0YvQsdGA0LDQu9C4ICR7IGNob3NlbkJvb2submFtZSB9IGApO1xuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZygn0J3QtdGCINGC0LDQutC+0LPQviDRgtC+0LLQsNGA0LAnKTtcbi8vIH1cblxuXG4vLyBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4gcHJvZHVjdC5zaG93RGF0YSgpKTtcblxuLy8gcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHByb2R1Y3QuYnV5UHJvZHVjdChwcm9kdWN0KSk7XG4vLyBjb25zb2xlLmxvZyhjYXJ0KTtcblxuXG5cbi8vIGNvbnNvbGUubG9nKHRvVXBwZXJDYXNlKCdzc2RzJykpO1xuXG4vLyBjb25zdCBzZWFyY2hCb29rcyA9IChxdWVyeTogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxJQm9va1tdPiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgc2VhcmNoKHF1ZXJ5LCBvcHRpb25zLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuLy8gICAgICAgICAvLyByZWplY3QobmV3IEVycm9yKCdzb21lIGVycm9yJykpXG4vLyAgICAgICAgIGlmIChlcnJvcikge1xuLy8gICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pXG4vLyB9KVxuLy8gY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbi8vICAgICBzZWFyY2hCb29rcyhcIkhhcnJ5IFBvdHRlclwiKVxuLy8gICAgICAgICAudGhlbihib29rcyA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhib29rcyk7XG4vLyAgICAgICAgICAgICByZXR1cm4gYm9va3M7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcItCe0YjQuNCx0LrQsFwiLCBlcnJvcilcbi8vICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbi8vICAgICAgICAgfSk7XG4vLyB9XG5cbi8vIGNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBzZWFyY2hCb29rcygnSGFycnkgUG90ZXInKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coYm9va3MpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICB9XG5cbi8vICAgICBjb25zb2xlLmxvZygnMScpO1xuLy8gfVxuXG4vLyBtYWluKCk7XG5cblxuLy8gc2VhcmNoKCdIYXJyeSBQb3RlcicsIHtcbi8vICAgICBsaW1pdDogMlxuLy8gfSwgKGVycm9yLCByZXN1bHQpID0+IHtcbi8vICAgICBpZiAoZXJyb3IpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUuZGlyKHJlc3VsdCwgeyBkZXB0aDogbnVsbCwgY29sb3JzOiB0cnVlIH0pXG4vLyAgICAgfVxuLy8gfSk7XG5cbi8vIGNvbnN0IHVzZXIxID0gbmV3IFVzZXIoJ0phbmUnLCAnRGF3JywgJ0phbmVARGF3JywgJzEyLjEwLjE5ODknLCAnREREREREJyk7XG4vLyBjb25zb2xlLmxvZyhg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMICR7SlNPTi5zdHJpbmdpZnkodXNlcjEpfWApO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMCwgYm9va3MpO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMSwgYm9va3MpO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMCwgYm9va3MpO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMywgYm9va3MpO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMiwgYm9va3MpO1xuLy8gdXNlcjEucmVtb3ZlRnJvbUNhcnQoMTAzKTtcbi8vIHVzZXIxLnJlbW92ZUZyb21DYXJ0KDEwMik7XG4vLyB1c2VyMS5yZW1vdmVGcm9tQ2FydCgxMDUpO1xuLy8gdXNlcjEucmVtb3ZlRnJvbUNhcnQoMTAwKTtcbi8vIHVzZXIxLnJlbW92ZUZyb21DYXJ0KDEwMCk7XG4vLyB1c2VyMS5yZW1vdmVGcm9tQ2FydCgxMDApO1xuXG5cbi8vIGNvbnNvbGUubG9nKGDQodGD0LzQvNCwICR7dXNlcjEuY291bnRUb3RhbCgpfWApO1xuLy8gY29uc29sZS5sb2coYNCa0L7RgNC30LjQvdCwICR7SlNPTi5zdHJpbmdpZnkodXNlcjEuY2FydCl9YCk7XG5cbi8vIGNvbnNvbGUubG9nKGJvb2tzLCBwcm9kdWN0cyk7XG5cblxuXG4iXX0=