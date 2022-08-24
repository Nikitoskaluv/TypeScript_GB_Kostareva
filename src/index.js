"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var string_helper_js_1 = require("./string-helper.js");
var google_books_search_1 = require("google-books-search");
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
console.log((0, string_helper_js_1.toUpperCase)('ssds'));
var searchBooks = function (query, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        (0, google_books_search_1.search)(query, options, function (error, result) {
            // reject(new Error('some error'))
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
};
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
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var books_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, searchBooks('Harry Poter')];
            case 1:
                books_1 = _a.sent();
                console.log(books_1);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3:
                console.log('1');
                return [2 /*return*/];
        }
    });
}); };
main();
// search('Harry Poter', {
//     limit: 2
// }, (error, result) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.dir(result, { depth: null, colors: true })
//     }
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLHVEQUFnRDtBQUNoRCwyREFBNkQ7QUFFN0QseUNBQXlDO0FBQ3pDLHFDQUFxQztBQUNyQyx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBR25DLGdIQUFnSDtBQUNoSCw0Q0FBNEM7QUFDNUMsOERBQThEO0FBQzlELE1BQU07QUFFTixtQ0FBbUM7QUFDbkMseUNBQXlDO0FBQ3pDLGFBQWE7QUFDYix1Q0FBdUM7QUFDdkMsTUFBTTtBQUNOLElBQUk7QUFDSiw0REFBNEQ7QUFDNUQseUNBQXlDO0FBQ3pDLHNDQUFzQztBQUN0QyxXQUFXO0FBQ1gseUNBQXlDO0FBQ3pDLElBQUk7QUFFSixnRUFBZ0U7QUFFaEUsOENBQThDO0FBQzlDLG1DQUFtQztBQUNuQyxzR0FBc0c7QUFDdEcsNkNBQTZDO0FBQzdDLGtGQUFrRjtBQUNsRiwyQ0FBMkM7QUFDM0MsNEZBQTRGO0FBQzVGLGFBQWE7QUFDYiwyQ0FBMkM7QUFDM0MsTUFBTTtBQUNOLElBQUk7QUFDSix1REFBdUQ7QUFDdkQsc0VBQXNFO0FBQ3RFLElBQUk7QUFFSiw4Q0FBOEM7QUFDOUMsNkZBQTZGO0FBQzdGLElBQUk7QUFHSiw4QkFBOEI7QUFDOUIsZ0hBQWdIO0FBQ2hILDBCQUEwQjtBQUMxQixJQUFJO0FBQ0osdUVBQXVFO0FBRXZFLHVCQUF1QjtBQUN2Qix1REFBdUQ7QUFDdkQsV0FBVztBQUNYLHdDQUF3QztBQUN4QyxJQUFJO0FBSUosK0JBQStCO0FBQy9CLG9EQUFvRDtBQUVwRCxpSUFBaUk7QUFDakksbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyxrQkFBa0I7QUFDbEIsSUFBSTtBQUNKLGdHQUFnRztBQUNoRyw4RkFBOEY7QUFFOUYseURBQXlEO0FBR3pELG9FQUFvRTtBQUNwRSxvQkFBb0I7QUFDcEIsdURBQXVEO0FBQ3ZELFdBQVc7QUFDWCx3Q0FBd0M7QUFDeEMsSUFBSTtBQUdKLG1EQUFtRDtBQUVuRCw0REFBNEQ7QUFDNUQscUJBQXFCO0FBSXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBQSw4QkFBVyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFakMsSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFhLEVBQUUsT0FBc0I7SUFBdEIsd0JBQUEsRUFBQSxZQUFzQjtJQUF1QixPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDekcsSUFBQSw0QkFBTSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtZQUNqQyxrQ0FBa0M7WUFDbEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDO0FBVCtFLENBUy9FLENBQUE7QUFDRiw2QkFBNkI7QUFDN0Isa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUMzQixrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYiw0QkFBNEI7QUFDNUIsMkNBQTJDO0FBQzNDLDRCQUE0QjtBQUM1QixjQUFjO0FBQ2QsSUFBSTtBQUVKLElBQU0sSUFBSSxHQUFHOzs7Ozs7Z0JBRVMscUJBQU0sV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFBOztnQkFBeEMsVUFBUSxTQUFnQztnQkFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsQ0FBQzs7OztnQkFFbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsQ0FBQzs7O2dCQUd2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O0tBQ3BCLENBQUE7QUFFRCxJQUFJLEVBQUUsQ0FBQztBQU9QLDBCQUEwQjtBQUMxQixlQUFlO0FBQ2YsMEJBQTBCO0FBQzFCLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmLDZEQUE2RDtBQUM3RCxRQUFRO0FBQ1IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgcHJvZHVjdHMsIGJvb2tzIH0gZnJvbSAnLi9wcm9kdWN0LWNvbGxlY3Rpb24uanMnXG5pbXBvcnQgeyBjYXJ0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbmltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2Jvb2suanMnXG5pbXBvcnQgeyBNeU1hcCB9IGZyb20gJy4vY29tbW9uL015TWFwLmpzJ1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9wcm9kdWN0LWNvbGxlY3Rpb24uanMnXG5pbXBvcnQgeyB0b1VwcGVyQ2FzZSB9IGZyb20gJy4vc3RyaW5nLWhlbHBlci5qcydcbmltcG9ydCB7IElCb29rLCBJT3B0aW9ucywgc2VhcmNoIH0gZnJvbSAnZ29vZ2xlLWJvb2tzLXNlYXJjaCdcblxuLy8gaW1wb3J0IHsgTm90ZXBhZCB9IGZyb20gJy4vbm90ZXBhZC5qcydcbi8vIGltcG9ydCB7IEFsYnVtIH0gZnJvbSAnLi9hbGJ1bS5qcydcbi8vIGltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG4vLyBpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuXG5cbi8vIGZ1bmN0aW9uIGZpbmRTdWl0YWJsZUJvb2soZ2VucmU6IHN0cmluZywgcGFnZXNMaW1pdDogbnVtYmVyLCBtdWx0aXBsZVJlY29tbWVuZGF0aW9ucyA9IHRydWUpOiBCb29rIHwgQm9va1tdIHtcbi8vICAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiB7XG4vLyAgICAgcmV0dXJuIGJvb2suZ2VucmUgPT09IGdlbnJlICYmIGJvb2sucHJpY2UgPD0gcGFnZXNMaW1pdFxuLy8gICB9XG5cbi8vICAgaWYgKG11bHRpcGxlUmVjb21tZW5kYXRpb25zKSB7XG4vLyAgICAgcmV0dXJuIGJvb2tzLmZpbHRlcihmaW5kQWxnb3JpdGhtKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiBib29rcy5maW5kKGZpbmRBbGdvcml0aG0pXG4vLyAgIH1cbi8vIH1cbi8vIGNvbnN0IHJlY29tbWVuZGVkQm9vayA9IGZpbmRTdWl0YWJsZUJvb2soJ2ZhbnRhc3knLCAxMDAwKVxuLy8gaWYgKHJlY29tbWVuZGVkQm9vayBpbnN0YW5jZW9mIEJvb2spIHtcbi8vICAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rLm5hbWUpXG4vLyB9IGVsc2Uge1xuLy8gICBjb25zb2xlLmxvZyhyZWNvbW1lbmRlZEJvb2tbMF0ubmFtZSlcbi8vIH1cblxuLy8gYm9va3MuZm9yRWFjaChib29rID0+IGNvbnNvbGUubG9nKGJvb2submFtZSwgYm9vay5jYW5CdXkoKSkpO1xuXG4vLyBmdW5jdGlvbiBzaG93RGF0YShwcm9kdWN0OiB1bmtub3duKTogdm9pZCB7XG4vLyAgIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQm9vaykge1xuLy8gICAgIGNvbnNvbGUubG9nKGAke3Byb2R1Y3QubmFtZX0gLSAke3Byb2R1Y3QuZ2VucmV9IC0gJHtnZXRBdXRob3IocHJvZHVjdCl9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfWApXG4vLyAgIH0gZWxzZSBpZiAocHJvZHVjdCBpbnN0YW5jZW9mIE5vdGVwYWQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfSAtICR7Z2V0UHJpY2UocHJvZHVjdCl9YClcbi8vICAgfSBlbHNlIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQWxidW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9LSR7cHJvZHVjdC5jYW5CdXkoKX0tJHtwcm9kdWN0LndpZHRofVgke3Byb2R1Y3QubGVuZ3RofWApXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IuVW5rbm93biB0eXBlJyk7XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGdldFByaWNlKHByb2R1Y3Q6IEJvb2sgfCBOb3RlcGFkKTogc3RyaW5nIHtcbi8vICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPyBwcm9kdWN0LnByaWNlLnRvU3RyaW5nKCkgOiAn0J3QtdGCINCyINC/0YDQvtC00LDQttC1J1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRBdXRob3IocHJvZHVjdDogQm9vayk6IHN0cmluZyB7XG4vLyAgIHJldHVybiBwcm9kdWN0LmF1dGhvciA/IHByb2R1Y3QuYXV0aG9yLm5hbWUgKyBwcm9kdWN0LmF1dGhvci5zdXJuYW1lIDogJ9CQ0LLRgtC+0YAg0L3QtSDRg9C60LDQt9Cw0L0nXG4vLyB9XG5cblxuLy8g0JfQsNC00LDQvdC40LUgMSDRhNGD0L3QutGG0LjRjyAgZ2V0RnJvbSBcbi8vIGZ1bmN0aW9uIGdldFByb2R1Y3RGcm9tQ2F0YWxvZzxUeXBlIGV4dGVuZHMgTXlNYXAsIFQgZXh0ZW5kcyBQcm9kdWN0PihvYmo6IFR5cGUsIGlkOiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbi8vICAgICByZXR1cm4gb2JqLmdldChpZCk7XG4vLyB9XG4vLyBjb25zdCBjaG9zZW5Qcm9kdWN0ID0gZ2V0UHJvZHVjdEZyb21DYXRhbG9nPE15TWFwLCBQcm9kdWN0PihtYXAsIDIpO1xuXG4vLyBpZiAoY2hvc2VuUHJvZHVjdCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGDQktGLINCy0YvQsdGA0LDQu9C4ICR7Y2hvc2VuUHJvZHVjdC5uYW1lfWApO1xuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZygn0J3QtdGCINGC0LDQutC+0LPQviDRgtC+0LLQsNGA0LAnKTtcbi8vIH1cblxuXG5cbi8vINCX0LDQtNCw0L3QuNC1IDMg0LrQvtGA0LfQuNC90LAg0Lgg0YTRg9C90LrRhtC40Y8gXG4vLyBjb25zdCBjYXJ0V2l0aE1hcCA9IG5ldyBNeU1hcDxudW1iZXIsIFByb2R1Y3Q+KCk7XG5cbi8vIGZ1bmN0aW9uIGdldFByb2R1Y3RzRm9yQ2FydDxUeXBlIGV4dGVuZHMgTXlNYXA+KG9iajogVHlwZSwgaWQ6IG51bWJlciwgcHJvZHVjdEZvckNhcnQ6IFByb2R1Y3QsIFE6IG51bWJlcik6IFR5cGUgfCB1bmRlZmluZWQge1xuLy8gICAgIG9iai5zZXQoaWQsIHByb2R1Y3RGb3JDYXJ0KTtcbi8vICAgICBvYmouZ2V0KGlkKVsnb3JkZXJlZFF1YW50aXR5J10gPSBRO1xuLy8gICAgIHJldHVybiBvYmo7XG4vLyB9XG4vLyBnZXRQcm9kdWN0c0ZvckNhcnQoY2FydFdpdGhNYXAsIDEsIG5ldyBCb29rKCdMb3JkIG9mIHRoZSBSaW5nJywgJ2ZhbnRhc3knLCAnaGFyZCcsIDEwMDEpLCAzKTtcbi8vIGdldFByb2R1Y3RzRm9yQ2FydChjYXJ0V2l0aE1hcCwgMiwgbmV3IEJvb2soJ0dhbWUgb2YgVGhyb25lcycsICdmYW50YXN5JywgJ3NvZnQnLCAyMjApLCAyKTtcblxuLy8gY29uc29sZS5sb2coYNCa0L7RgNC30LjQvdCwICR7SlNPTi5zdHJpbmdpZnkoY2FydFdpdGhNYXApfWApO1xuXG5cbi8vIGNvbnN0IGNob3NlbkJvb2sgPSBnZXRQcm9kdWN0RnJvbUNhdGFsb2c8UHJvZHVjdDxhbnk+Pihib29rcywgMyk7XG4vLyBpZiAoY2hvc2VuQm9vaykge1xuLy8gICAgIGNvbnNvbGUubG9nKGDQktGLINCy0YvQsdGA0LDQu9C4ICR7IGNob3NlbkJvb2submFtZSB9IGApO1xuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZygn0J3QtdGCINGC0LDQutC+0LPQviDRgtC+0LLQsNGA0LAnKTtcbi8vIH1cblxuXG4vLyBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4gcHJvZHVjdC5zaG93RGF0YSgpKTtcblxuLy8gcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHByb2R1Y3QuYnV5UHJvZHVjdChwcm9kdWN0KSk7XG4vLyBjb25zb2xlLmxvZyhjYXJ0KTtcblxuXG5cbmNvbnNvbGUubG9nKHRvVXBwZXJDYXNlKCdzc2RzJykpO1xuXG5jb25zdCBzZWFyY2hCb29rcyA9IChxdWVyeTogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxJQm9va1tdPiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2VhcmNoKHF1ZXJ5LCBvcHRpb25zLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyByZWplY3QobmV3IEVycm9yKCdzb21lIGVycm9yJykpXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuLy8gY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbi8vICAgICBzZWFyY2hCb29rcyhcIkhhcnJ5IFBvdHRlclwiKVxuLy8gICAgICAgICAudGhlbihib29rcyA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhib29rcyk7XG4vLyAgICAgICAgICAgICByZXR1cm4gYm9va3M7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcItCe0YjQuNCx0LrQsFwiLCBlcnJvcilcbi8vICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbi8vICAgICAgICAgfSk7XG4vLyB9XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBzZWFyY2hCb29rcygnSGFycnkgUG90ZXInKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9va3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnMScpO1xufVxuXG5tYWluKCk7XG5cblxuXG5cblxuXG4vLyBzZWFyY2goJ0hhcnJ5IFBvdGVyJywge1xuLy8gICAgIGxpbWl0OiAyXG4vLyB9LCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuLy8gICAgIGlmIChlcnJvcikge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY29uc29sZS5kaXIocmVzdWx0LCB7IGRlcHRoOiBudWxsLCBjb2xvcnM6IHRydWUgfSlcbi8vICAgICB9XG4vLyB9KTtcblxuXG5cblxuXG5cbiJdfQ==