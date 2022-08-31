"use strict";
exports.__esModule = true;
var book_js_1 = require("./book.js");
var MyMap_js_1 = require("./common/MyMap.js");
var product_collection_js_1 = require("./product-collection.js");
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
function getProductFromCatalog(obj, id) {
    return obj.get(id);
}
var chosenProduct = getProductFromCatalog(product_collection_js_1.map, 2);
if (chosenProduct) {
    console.log("\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438 ".concat(chosenProduct.name));
}
else {
    console.log('Нет такого товара');
}
// Задание 3 корзина и функция 
var cartWithMap = new MyMap_js_1.MyMap();
function getProductsForCart(obj, id, productForCart, Q) {
    obj.set(id, productForCart);
    obj.get(id)['orderedQuantity'] = Q;
    return obj;
}
getProductsForCart(cartWithMap, 1, new book_js_1.Book('Lord of the Ring', 'fantasy', 'hard', 1001), 3);
getProductsForCart(cartWithMap, 2, new book_js_1.Book('Game of Thrones', 'fantasy', 'soft', 220), 2);
console.log("\u041A\u043E\u0440\u0437\u0438\u043D\u0430 ".concat(JSON.stringify(cartWithMap)));
// const chosenBook = getProductFromCatalog<Product<any>>(books, 3);
// if (chosenBook) {
//     console.log(`Вы выбрали ${ chosenBook.name } `);
// } else {
//     console.log('Нет такого товара');
// }
// products.forEach(product => product.showData());
// products.forEach(product => product.buyProduct(product));
// console.log(cart);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLHFDQUFnQztBQUNoQyw4Q0FBeUM7QUFDekMsaUVBQTZDO0FBRTdDLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMseUNBQXlDO0FBQ3pDLG1DQUFtQztBQUduQyxnSEFBZ0g7QUFDaEgsNENBQTRDO0FBQzVDLDhEQUE4RDtBQUM5RCxNQUFNO0FBRU4sbUNBQW1DO0FBQ25DLHlDQUF5QztBQUN6QyxhQUFhO0FBQ2IsdUNBQXVDO0FBQ3ZDLE1BQU07QUFDTixJQUFJO0FBQ0osNERBQTREO0FBQzVELHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMsV0FBVztBQUNYLHlDQUF5QztBQUN6QyxJQUFJO0FBRUosZ0VBQWdFO0FBRWhFLDhDQUE4QztBQUM5QyxtQ0FBbUM7QUFDbkMsc0dBQXNHO0FBQ3RHLDZDQUE2QztBQUM3QyxrRkFBa0Y7QUFDbEYsMkNBQTJDO0FBQzNDLDRGQUE0RjtBQUM1RixhQUFhO0FBQ2IsMkNBQTJDO0FBQzNDLE1BQU07QUFDTixJQUFJO0FBQ0osdURBQXVEO0FBQ3ZELHNFQUFzRTtBQUN0RSxJQUFJO0FBRUosOENBQThDO0FBQzlDLDZGQUE2RjtBQUM3RixJQUFJO0FBR0osOEJBQThCO0FBQzlCLFNBQVMscUJBQXFCLENBQXdDLEdBQVMsRUFBRSxFQUFVO0lBQ3ZGLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBQ0QsSUFBTSxhQUFhLEdBQUcscUJBQXFCLENBQWlCLDJCQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFcEUsSUFBSSxhQUFhLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGtFQUFjLGFBQWEsQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDO0NBQ25EO0tBQU07SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Q0FDcEM7QUFJRCwrQkFBK0I7QUFDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxnQkFBSyxFQUFtQixDQUFDO0FBRWpELFNBQVMsa0JBQWtCLENBQXFCLEdBQVMsRUFBRSxFQUFVLEVBQUUsY0FBdUIsRUFBRSxDQUFTO0lBQ3JHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBQ0Qsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLGNBQUksQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdGLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxjQUFJLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUzRixPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUUsQ0FBQyxDQUFDO0FBTXRELG9FQUFvRTtBQUNwRSxvQkFBb0I7QUFDcEIsdURBQXVEO0FBQ3ZELFdBQVc7QUFDWCx3Q0FBd0M7QUFDeEMsSUFBSTtBQUdKLG1EQUFtRDtBQUVuRCw0REFBNEQ7QUFDNUQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBwcm9kdWN0cywgYm9va3MgfSBmcm9tICcuL3Byb2R1Y3QtY29sbGVjdGlvbi5qcydcbmltcG9ydCB7IGNhcnQgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuaW1wb3J0IHsgQm9vayB9IGZyb20gJy4vYm9vay5qcydcbmltcG9ydCB7IE15TWFwIH0gZnJvbSAnLi9jb21tb24vTXlNYXAuanMnXG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL3Byb2R1Y3QtY29sbGVjdGlvbi5qcydcblxuLy8gaW1wb3J0IHsgTm90ZXBhZCB9IGZyb20gJy4vbm90ZXBhZC5qcydcbi8vIGltcG9ydCB7IEFsYnVtIH0gZnJvbSAnLi9hbGJ1bS5qcydcbi8vIGltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG4vLyBpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuXG5cbi8vIGZ1bmN0aW9uIGZpbmRTdWl0YWJsZUJvb2soZ2VucmU6IHN0cmluZywgcGFnZXNMaW1pdDogbnVtYmVyLCBtdWx0aXBsZVJlY29tbWVuZGF0aW9ucyA9IHRydWUpOiBCb29rIHwgQm9va1tdIHtcbi8vICAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiB7XG4vLyAgICAgcmV0dXJuIGJvb2suZ2VucmUgPT09IGdlbnJlICYmIGJvb2sucHJpY2UgPD0gcGFnZXNMaW1pdFxuLy8gICB9XG5cbi8vICAgaWYgKG11bHRpcGxlUmVjb21tZW5kYXRpb25zKSB7XG4vLyAgICAgcmV0dXJuIGJvb2tzLmZpbHRlcihmaW5kQWxnb3JpdGhtKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiBib29rcy5maW5kKGZpbmRBbGdvcml0aG0pXG4vLyAgIH1cbi8vIH1cbi8vIGNvbnN0IHJlY29tbWVuZGVkQm9vayA9IGZpbmRTdWl0YWJsZUJvb2soJ2ZhbnRhc3knLCAxMDAwKVxuLy8gaWYgKHJlY29tbWVuZGVkQm9vayBpbnN0YW5jZW9mIEJvb2spIHtcbi8vICAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rLm5hbWUpXG4vLyB9IGVsc2Uge1xuLy8gICBjb25zb2xlLmxvZyhyZWNvbW1lbmRlZEJvb2tbMF0ubmFtZSlcbi8vIH1cblxuLy8gYm9va3MuZm9yRWFjaChib29rID0+IGNvbnNvbGUubG9nKGJvb2submFtZSwgYm9vay5jYW5CdXkoKSkpO1xuXG4vLyBmdW5jdGlvbiBzaG93RGF0YShwcm9kdWN0OiB1bmtub3duKTogdm9pZCB7XG4vLyAgIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQm9vaykge1xuLy8gICAgIGNvbnNvbGUubG9nKGAke3Byb2R1Y3QubmFtZX0gLSAke3Byb2R1Y3QuZ2VucmV9IC0gJHtnZXRBdXRob3IocHJvZHVjdCl9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfWApXG4vLyAgIH0gZWxzZSBpZiAocHJvZHVjdCBpbnN0YW5jZW9mIE5vdGVwYWQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfSAtICR7Z2V0UHJpY2UocHJvZHVjdCl9YClcbi8vICAgfSBlbHNlIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQWxidW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9LSR7cHJvZHVjdC5jYW5CdXkoKX0tJHtwcm9kdWN0LndpZHRofVgke3Byb2R1Y3QubGVuZ3RofWApXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IuVW5rbm93biB0eXBlJyk7XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGdldFByaWNlKHByb2R1Y3Q6IEJvb2sgfCBOb3RlcGFkKTogc3RyaW5nIHtcbi8vICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPyBwcm9kdWN0LnByaWNlLnRvU3RyaW5nKCkgOiAn0J3QtdGCINCyINC/0YDQvtC00LDQttC1J1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRBdXRob3IocHJvZHVjdDogQm9vayk6IHN0cmluZyB7XG4vLyAgIHJldHVybiBwcm9kdWN0LmF1dGhvciA/IHByb2R1Y3QuYXV0aG9yLm5hbWUgKyBwcm9kdWN0LmF1dGhvci5zdXJuYW1lIDogJ9CQ0LLRgtC+0YAg0L3QtSDRg9C60LDQt9Cw0L0nXG4vLyB9XG5cblxuLy8g0JfQsNC00LDQvdC40LUgMSDRhNGD0L3QutGG0LjRjyAgZ2V0RnJvbSBcbmZ1bmN0aW9uIGdldFByb2R1Y3RGcm9tQ2F0YWxvZzxUeXBlIGV4dGVuZHMgTXlNYXAsIFQgZXh0ZW5kcyBQcm9kdWN0PihvYmo6IFR5cGUsIGlkOiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gb2JqLmdldChpZCk7XG59XG5jb25zdCBjaG9zZW5Qcm9kdWN0ID0gZ2V0UHJvZHVjdEZyb21DYXRhbG9nPE15TWFwLCBQcm9kdWN0PihtYXAsIDIpO1xuXG5pZiAoY2hvc2VuUHJvZHVjdCkge1xuICAgIGNvbnNvbGUubG9nKGDQktGLINCy0YvQsdGA0LDQu9C4ICR7Y2hvc2VuUHJvZHVjdC5uYW1lfWApO1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygn0J3QtdGCINGC0LDQutC+0LPQviDRgtC+0LLQsNGA0LAnKTtcbn1cblxuXG5cbi8vINCX0LDQtNCw0L3QuNC1IDMg0LrQvtGA0LfQuNC90LAg0Lgg0YTRg9C90LrRhtC40Y8gXG5jb25zdCBjYXJ0V2l0aE1hcCA9IG5ldyBNeU1hcDxudW1iZXIsIFByb2R1Y3Q+KCk7XG5cbmZ1bmN0aW9uIGdldFByb2R1Y3RzRm9yQ2FydDxUeXBlIGV4dGVuZHMgTXlNYXA+KG9iajogVHlwZSwgaWQ6IG51bWJlciwgcHJvZHVjdEZvckNhcnQ6IFByb2R1Y3QsIFE6IG51bWJlcik6IFR5cGUgfCB1bmRlZmluZWQge1xuICAgIG9iai5zZXQoaWQsIHByb2R1Y3RGb3JDYXJ0KTtcbiAgICBvYmouZ2V0KGlkKVsnb3JkZXJlZFF1YW50aXR5J10gPSBRO1xuICAgIHJldHVybiBvYmo7XG59XG5nZXRQcm9kdWN0c0ZvckNhcnQoY2FydFdpdGhNYXAsIDEsIG5ldyBCb29rKCdMb3JkIG9mIHRoZSBSaW5nJywgJ2ZhbnRhc3knLCAnaGFyZCcsIDEwMDEpLCAzKTtcbmdldFByb2R1Y3RzRm9yQ2FydChjYXJ0V2l0aE1hcCwgMiwgbmV3IEJvb2soJ0dhbWUgb2YgVGhyb25lcycsICdmYW50YXN5JywgJ3NvZnQnLCAyMjApLCAyKTtcblxuY29uc29sZS5sb2coYNCa0L7RgNC30LjQvdCwICR7SlNPTi5zdHJpbmdpZnkoY2FydFdpdGhNYXApfWApO1xuXG5cblxuXG5cbi8vIGNvbnN0IGNob3NlbkJvb2sgPSBnZXRQcm9kdWN0RnJvbUNhdGFsb2c8UHJvZHVjdDxhbnk+Pihib29rcywgMyk7XG4vLyBpZiAoY2hvc2VuQm9vaykge1xuLy8gICAgIGNvbnNvbGUubG9nKGDQktGLINCy0YvQsdGA0LDQu9C4ICR7IGNob3NlbkJvb2submFtZSB9IGApO1xuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZygn0J3QtdGCINGC0LDQutC+0LPQviDRgtC+0LLQsNGA0LAnKTtcbi8vIH1cblxuXG4vLyBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4gcHJvZHVjdC5zaG93RGF0YSgpKTtcblxuLy8gcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHByb2R1Y3QuYnV5UHJvZHVjdChwcm9kdWN0KSk7XG4vLyBjb25zb2xlLmxvZyhjYXJ0KTtcblxuXG5cblxuXG4iXX0=