"use strict";
exports.__esModule = true;
var product_collection_js_1 = require("./product-collection.js");
var userClass_js_1 = require("./userClass.js");
// import { cart } from './product.js'
// import { Product } from './product.js'
// import { Book } from './book.js'
// import { MyMap } from './common/MyMap.js'
// import { map } from './product-collection.js'
// import { toUpperCase } from './string-helper.js'
// import { IBook, IOptions, search } from 'google-books-search'
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
var user1 = new userClass_js_1.User('Jane', 'Daw', 'Jane@Daw', '12.10.1989', 'DDDDDD');
console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(JSON.stringify(user1)));
user1.addToCart(100, product_collection_js_1.books);
user1.addToCart(101, product_collection_js_1.books);
user1.addToCart(100, product_collection_js_1.books);
user1.addToCart(103, product_collection_js_1.books);
user1.addToCart(102, product_collection_js_1.books);
user1.removeFromCart(103);
user1.removeFromCart(102);
user1.removeFromCart(105);
user1.removeFromCart(100);
user1.removeFromCart(100);
user1.removeFromCart(100);
console.log("\u0421\u0443\u043C\u043C\u0430 ".concat(user1.countTotal()));
console.log("\u041A\u043E\u0440\u0437\u0438\u043D\u0430 ".concat(JSON.stringify(user1.cart)));
console.log(product_collection_js_1.books, product_collection_js_1.products);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlFQUF5RDtBQUN6RCwrQ0FBc0M7QUFFdEMsc0NBQXNDO0FBQ3RDLHlDQUF5QztBQUN6QyxtQ0FBbUM7QUFDbkMsNENBQTRDO0FBQzVDLGdEQUFnRDtBQUNoRCxtREFBbUQ7QUFDbkQsZ0VBQWdFO0FBQ2hFLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMseUNBQXlDO0FBQ3pDLG1DQUFtQztBQUduQyxnSEFBZ0g7QUFDaEgsNENBQTRDO0FBQzVDLDhEQUE4RDtBQUM5RCxNQUFNO0FBRU4sbUNBQW1DO0FBQ25DLHlDQUF5QztBQUN6QyxhQUFhO0FBQ2IsdUNBQXVDO0FBQ3ZDLE1BQU07QUFDTixJQUFJO0FBQ0osNERBQTREO0FBQzVELHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMsV0FBVztBQUNYLHlDQUF5QztBQUN6QyxJQUFJO0FBRUosZ0VBQWdFO0FBRWhFLDhDQUE4QztBQUM5QyxtQ0FBbUM7QUFDbkMsc0dBQXNHO0FBQ3RHLDZDQUE2QztBQUM3QyxrRkFBa0Y7QUFDbEYsMkNBQTJDO0FBQzNDLDRGQUE0RjtBQUM1RixhQUFhO0FBQ2IsMkNBQTJDO0FBQzNDLE1BQU07QUFDTixJQUFJO0FBQ0osdURBQXVEO0FBQ3ZELHNFQUFzRTtBQUN0RSxJQUFJO0FBRUosOENBQThDO0FBQzlDLDZGQUE2RjtBQUM3RixJQUFJO0FBR0osOEJBQThCO0FBQzlCLGdIQUFnSDtBQUNoSCwwQkFBMEI7QUFDMUIsSUFBSTtBQUNKLHVFQUF1RTtBQUV2RSx1QkFBdUI7QUFDdkIsdURBQXVEO0FBQ3ZELFdBQVc7QUFDWCx3Q0FBd0M7QUFDeEMsSUFBSTtBQUlKLCtCQUErQjtBQUMvQixvREFBb0Q7QUFFcEQsaUlBQWlJO0FBQ2pJLG1DQUFtQztBQUNuQywwQ0FBMEM7QUFDMUMsa0JBQWtCO0FBQ2xCLElBQUk7QUFDSixnR0FBZ0c7QUFDaEcsOEZBQThGO0FBRTlGLHlEQUF5RDtBQUd6RCxvRUFBb0U7QUFDcEUsb0JBQW9CO0FBQ3BCLHVEQUF1RDtBQUN2RCxXQUFXO0FBQ1gsd0NBQXdDO0FBQ3hDLElBQUk7QUFHSixtREFBbUQ7QUFFbkQsNERBQTREO0FBQzVELHFCQUFxQjtBQUlyQixvQ0FBb0M7QUFFcEMsc0hBQXNIO0FBQ3RILGtEQUFrRDtBQUNsRCw2Q0FBNkM7QUFDN0MsdUJBQXVCO0FBQ3ZCLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsK0JBQStCO0FBQy9CLFlBQVk7QUFDWixTQUFTO0FBQ1QsS0FBSztBQUNMLDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBQzNCLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDRCQUE0QjtBQUM1QiwyQ0FBMkM7QUFDM0MsNEJBQTRCO0FBQzVCLGNBQWM7QUFDZCxJQUFJO0FBRUosNkJBQTZCO0FBQzdCLFlBQVk7QUFDWiwwREFBMEQ7QUFDMUQsOEJBQThCO0FBQzlCLHdCQUF3QjtBQUN4Qiw4QkFBOEI7QUFDOUIsUUFBUTtBQUVSLHdCQUF3QjtBQUN4QixJQUFJO0FBRUosVUFBVTtBQUdWLDBCQUEwQjtBQUMxQixlQUFlO0FBQ2YsMEJBQTBCO0FBQzFCLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmLDZEQUE2RDtBQUM3RCxRQUFRO0FBQ1IsTUFBTTtBQUVOLElBQU0sS0FBSyxHQUFHLElBQUksbUJBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRkFBZ0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUM7QUFDckQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsNkJBQUssQ0FBQyxDQUFDO0FBQzVCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLDZCQUFLLENBQUMsQ0FBQztBQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSw2QkFBSyxDQUFDLENBQUM7QUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsNkJBQUssQ0FBQyxDQUFDO0FBQzVCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLDZCQUFLLENBQUMsQ0FBQztBQUM1QixLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUcxQixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUFTLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBRSxDQUFDLENBQUM7QUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDLENBQUM7QUFFckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBSyxFQUFFLGdDQUFRLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgcHJvZHVjdHMsIGJvb2tzIH0gZnJvbSAnLi9wcm9kdWN0LWNvbGxlY3Rpb24uanMnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyQ2xhc3MuanMnO1xuXG4vLyBpbXBvcnQgeyBjYXJ0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuLy8gaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbi8vIGltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2Jvb2suanMnXG4vLyBpbXBvcnQgeyBNeU1hcCB9IGZyb20gJy4vY29tbW9uL015TWFwLmpzJ1xuLy8gaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9wcm9kdWN0LWNvbGxlY3Rpb24uanMnXG4vLyBpbXBvcnQgeyB0b1VwcGVyQ2FzZSB9IGZyb20gJy4vc3RyaW5nLWhlbHBlci5qcydcbi8vIGltcG9ydCB7IElCb29rLCBJT3B0aW9ucywgc2VhcmNoIH0gZnJvbSAnZ29vZ2xlLWJvb2tzLXNlYXJjaCdcbi8vIGltcG9ydCB7IE5vdGVwYWQgfSBmcm9tICcuL25vdGVwYWQuanMnXG4vLyBpbXBvcnQgeyBBbGJ1bSB9IGZyb20gJy4vYWxidW0uanMnXG4vLyBpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuLy8gaW1wb3J0IHsgQm9vayB9IGZyb20gJy4vYm9vay5qcydcblxuXG4vLyBmdW5jdGlvbiBmaW5kU3VpdGFibGVCb29rKGdlbnJlOiBzdHJpbmcsIHBhZ2VzTGltaXQ6IG51bWJlciwgbXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMgPSB0cnVlKTogQm9vayB8IEJvb2tbXSB7XG4vLyAgIGNvbnN0IGZpbmRBbGdvcml0aG0gPSAoYm9vazogQm9vaykgPT4ge1xuLy8gICAgIHJldHVybiBib29rLmdlbnJlID09PSBnZW5yZSAmJiBib29rLnByaWNlIDw9IHBhZ2VzTGltaXRcbi8vICAgfVxuXG4vLyAgIGlmIChtdWx0aXBsZVJlY29tbWVuZGF0aW9ucykge1xuLy8gICAgIHJldHVybiBib29rcy5maWx0ZXIoZmluZEFsZ29yaXRobSlcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gYm9va3MuZmluZChmaW5kQWxnb3JpdGhtKVxuLy8gICB9XG4vLyB9XG4vLyBjb25zdCByZWNvbW1lbmRlZEJvb2sgPSBmaW5kU3VpdGFibGVCb29rKCdmYW50YXN5JywgMTAwMClcbi8vIGlmIChyZWNvbW1lbmRlZEJvb2sgaW5zdGFuY2VvZiBCb29rKSB7XG4vLyAgIGNvbnNvbGUubG9nKHJlY29tbWVuZGVkQm9vay5uYW1lKVxuLy8gfSBlbHNlIHtcbi8vICAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rWzBdLm5hbWUpXG4vLyB9XG5cbi8vIGJvb2tzLmZvckVhY2goYm9vayA9PiBjb25zb2xlLmxvZyhib29rLm5hbWUsIGJvb2suY2FuQnV5KCkpKTtcblxuLy8gZnVuY3Rpb24gc2hvd0RhdGEocHJvZHVjdDogdW5rbm93bik6IHZvaWQge1xuLy8gICBpZiAocHJvZHVjdCBpbnN0YW5jZW9mIEJvb2spIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LmdlbnJlfSAtICR7Z2V0QXV0aG9yKHByb2R1Y3QpfSAtICR7cHJvZHVjdC5jYW5CdXkoKX1gKVxuLy8gICB9IGVsc2UgaWYgKHByb2R1Y3QgaW5zdGFuY2VvZiBOb3RlcGFkKSB7XG4vLyAgICAgY29uc29sZS5sb2coYCR7cHJvZHVjdC5uYW1lfSAtICR7cHJvZHVjdC5jYW5CdXkoKX0gLSAke2dldFByaWNlKHByb2R1Y3QpfWApXG4vLyAgIH0gZWxzZSBpZiAocHJvZHVjdCBpbnN0YW5jZW9mIEFsYnVtKSB7XG4vLyAgICAgY29uc29sZS5sb2coYCR7cHJvZHVjdC5uYW1lfS0ke3Byb2R1Y3QuY2FuQnV5KCl9LSR7cHJvZHVjdC53aWR0aH1YJHtwcm9kdWN0Lmxlbmd0aH1gKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yLlVua25vd24gdHlwZScpO1xuLy8gICB9XG4vLyB9XG4vLyBmdW5jdGlvbiBnZXRQcmljZShwcm9kdWN0OiBCb29rIHwgTm90ZXBhZCk6IHN0cmluZyB7XG4vLyAgIHJldHVybiBwcm9kdWN0LnByaWNlID8gcHJvZHVjdC5wcmljZS50b1N0cmluZygpIDogJ9Cd0LXRgiDQsiDQv9GA0L7QtNCw0LbQtSdcbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0QXV0aG9yKHByb2R1Y3Q6IEJvb2spOiBzdHJpbmcge1xuLy8gICByZXR1cm4gcHJvZHVjdC5hdXRob3IgPyBwcm9kdWN0LmF1dGhvci5uYW1lICsgcHJvZHVjdC5hdXRob3Iuc3VybmFtZSA6ICfQkNCy0YLQvtGAINC90LUg0YPQutCw0LfQsNC9J1xuLy8gfVxuXG5cbi8vINCX0LDQtNCw0L3QuNC1IDEg0YTRg9C90LrRhtC40Y8gIGdldEZyb20gXG4vLyBmdW5jdGlvbiBnZXRQcm9kdWN0RnJvbUNhdGFsb2c8VHlwZSBleHRlbmRzIE15TWFwLCBUIGV4dGVuZHMgUHJvZHVjdD4ob2JqOiBUeXBlLCBpZDogbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XG4vLyAgICAgcmV0dXJuIG9iai5nZXQoaWQpO1xuLy8gfVxuLy8gY29uc3QgY2hvc2VuUHJvZHVjdCA9IGdldFByb2R1Y3RGcm9tQ2F0YWxvZzxNeU1hcCwgUHJvZHVjdD4obWFwLCAyKTtcblxuLy8gaWYgKGNob3NlblByb2R1Y3QpIHtcbi8vICAgICBjb25zb2xlLmxvZyhg0JLRiyDQstGL0LHRgNCw0LvQuCAke2Nob3NlblByb2R1Y3QubmFtZX1gKTtcbi8vIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coJ9Cd0LXRgiDRgtCw0LrQvtCz0L4g0YLQvtCy0LDRgNCwJyk7XG4vLyB9XG5cblxuXG4vLyDQl9Cw0LTQsNC90LjQtSAzINC60L7RgNC30LjQvdCwINC4INGE0YPQvdC60YbQuNGPIFxuLy8gY29uc3QgY2FydFdpdGhNYXAgPSBuZXcgTXlNYXA8bnVtYmVyLCBQcm9kdWN0PigpO1xuXG4vLyBmdW5jdGlvbiBnZXRQcm9kdWN0c0ZvckNhcnQ8VHlwZSBleHRlbmRzIE15TWFwPihvYmo6IFR5cGUsIGlkOiBudW1iZXIsIHByb2R1Y3RGb3JDYXJ0OiBQcm9kdWN0LCBROiBudW1iZXIpOiBUeXBlIHwgdW5kZWZpbmVkIHtcbi8vICAgICBvYmouc2V0KGlkLCBwcm9kdWN0Rm9yQ2FydCk7XG4vLyAgICAgb2JqLmdldChpZClbJ29yZGVyZWRRdWFudGl0eSddID0gUTtcbi8vICAgICByZXR1cm4gb2JqO1xuLy8gfVxuLy8gZ2V0UHJvZHVjdHNGb3JDYXJ0KGNhcnRXaXRoTWFwLCAxLCBuZXcgQm9vaygnTG9yZCBvZiB0aGUgUmluZycsICdmYW50YXN5JywgJ2hhcmQnLCAxMDAxKSwgMyk7XG4vLyBnZXRQcm9kdWN0c0ZvckNhcnQoY2FydFdpdGhNYXAsIDIsIG5ldyBCb29rKCdHYW1lIG9mIFRocm9uZXMnLCAnZmFudGFzeScsICdzb2Z0JywgMjIwKSwgMik7XG5cbi8vIGNvbnNvbGUubG9nKGDQmtC+0YDQt9C40L3QsCAke0pTT04uc3RyaW5naWZ5KGNhcnRXaXRoTWFwKX1gKTtcblxuXG4vLyBjb25zdCBjaG9zZW5Cb29rID0gZ2V0UHJvZHVjdEZyb21DYXRhbG9nPFByb2R1Y3Q8YW55Pj4oYm9va3MsIDMpO1xuLy8gaWYgKGNob3NlbkJvb2spIHtcbi8vICAgICBjb25zb2xlLmxvZyhg0JLRiyDQstGL0LHRgNCw0LvQuCAkeyBjaG9zZW5Cb29rLm5hbWUgfSBgKTtcbi8vIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coJ9Cd0LXRgiDRgtCw0LrQvtCz0L4g0YLQvtCy0LDRgNCwJyk7XG4vLyB9XG5cblxuLy8gcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHByb2R1Y3Quc2hvd0RhdGEoKSk7XG5cbi8vIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiBwcm9kdWN0LmJ1eVByb2R1Y3QocHJvZHVjdCkpO1xuLy8gY29uc29sZS5sb2coY2FydCk7XG5cblxuXG4vLyBjb25zb2xlLmxvZyh0b1VwcGVyQ2FzZSgnc3NkcycpKTtcblxuLy8gY29uc3Qgc2VhcmNoQm9va3MgPSAocXVlcnk6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IFByb21pc2U8SUJvb2tbXT4gPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgIHNlYXJjaChxdWVyeSwgb3B0aW9ucywgKGVycm9yLCByZXN1bHQpID0+IHtcbi8vICAgICAgICAgLy8gcmVqZWN0KG5ldyBFcnJvcignc29tZSBlcnJvcicpKVxuLy8gICAgICAgICBpZiAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KVxuLy8gfSlcbi8vIGNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgc2VhcmNoQm9va3MoXCJIYXJyeSBQb3R0ZXJcIilcbi8vICAgICAgICAgLnRoZW4oYm9va3MgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYm9va3MpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIGJvb2tzO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCLQntGI0LjQsdC60LBcIiwgZXJyb3IpXG4vLyAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4vLyAgICAgICAgIH0pO1xuLy8gfVxuXG4vLyBjb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgc2VhcmNoQm9va3MoJ0hhcnJ5IFBvdGVyJyk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGJvb2tzKTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc29sZS5sb2coJzEnKTtcbi8vIH1cblxuLy8gbWFpbigpO1xuXG5cbi8vIHNlYXJjaCgnSGFycnkgUG90ZXInLCB7XG4vLyAgICAgbGltaXQ6IDJcbi8vIH0sIChlcnJvciwgcmVzdWx0KSA9PiB7XG4vLyAgICAgaWYgKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmRpcihyZXN1bHQsIHsgZGVwdGg6IG51bGwsIGNvbG9yczogdHJ1ZSB9KVxuLy8gICAgIH1cbi8vIH0pO1xuXG5jb25zdCB1c2VyMSA9IG5ldyBVc2VyKCdKYW5lJywgJ0RhdycsICdKYW5lQERhdycsICcxMi4xMC4xOTg5JywgJ0RERERERCcpO1xuY29uc29sZS5sb2coYNCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCAke0pTT04uc3RyaW5naWZ5KHVzZXIxKX1gKTtcbnVzZXIxLmFkZFRvQ2FydCgxMDAsIGJvb2tzKTtcbnVzZXIxLmFkZFRvQ2FydCgxMDEsIGJvb2tzKTtcbnVzZXIxLmFkZFRvQ2FydCgxMDAsIGJvb2tzKTtcbnVzZXIxLmFkZFRvQ2FydCgxMDMsIGJvb2tzKTtcbnVzZXIxLmFkZFRvQ2FydCgxMDIsIGJvb2tzKTtcbnVzZXIxLnJlbW92ZUZyb21DYXJ0KDEwMyk7XG51c2VyMS5yZW1vdmVGcm9tQ2FydCgxMDIpO1xudXNlcjEucmVtb3ZlRnJvbUNhcnQoMTA1KTtcbnVzZXIxLnJlbW92ZUZyb21DYXJ0KDEwMCk7XG51c2VyMS5yZW1vdmVGcm9tQ2FydCgxMDApO1xudXNlcjEucmVtb3ZlRnJvbUNhcnQoMTAwKTtcblxuXG5jb25zb2xlLmxvZyhg0KHRg9C80LzQsCAke3VzZXIxLmNvdW50VG90YWwoKX1gKTtcbmNvbnNvbGUubG9nKGDQmtC+0YDQt9C40L3QsCAke0pTT04uc3RyaW5naWZ5KHVzZXIxLmNhcnQpfWApO1xuXG5jb25zb2xlLmxvZyhib29rcywgcHJvZHVjdHMpO1xuXG5cblxuIl19