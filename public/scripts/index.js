import { Book } from './book.js';
import { MyMap } from './common/MyMap.js';
import { map } from './product-collection.js';
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
const chosenProduct = getProductFromCatalog(map, 2);
if (chosenProduct) {
    console.log(`Вы выбрали ${chosenProduct.name}`);
}
else {
    console.log('Нет такого товара');
}
// Задание 3 корзина и функция 
const cartWithMap = new MyMap();
function getProductsForCart(obj, id, productForCart, Q) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUNoQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBRTdDLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMseUNBQXlDO0FBQ3pDLG1DQUFtQztBQUduQyxnSEFBZ0g7QUFDaEgsNENBQTRDO0FBQzVDLDhEQUE4RDtBQUM5RCxNQUFNO0FBRU4sbUNBQW1DO0FBQ25DLHlDQUF5QztBQUN6QyxhQUFhO0FBQ2IsdUNBQXVDO0FBQ3ZDLE1BQU07QUFDTixJQUFJO0FBQ0osNERBQTREO0FBQzVELHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMsV0FBVztBQUNYLHlDQUF5QztBQUN6QyxJQUFJO0FBRUosZ0VBQWdFO0FBRWhFLDhDQUE4QztBQUM5QyxtQ0FBbUM7QUFDbkMsc0dBQXNHO0FBQ3RHLDZDQUE2QztBQUM3QyxrRkFBa0Y7QUFDbEYsMkNBQTJDO0FBQzNDLDRGQUE0RjtBQUM1RixhQUFhO0FBQ2IsMkNBQTJDO0FBQzNDLE1BQU07QUFDTixJQUFJO0FBQ0osdURBQXVEO0FBQ3ZELHNFQUFzRTtBQUN0RSxJQUFJO0FBRUosOENBQThDO0FBQzlDLDZGQUE2RjtBQUM3RixJQUFJO0FBR0osOEJBQThCO0FBQzlCLFNBQVMscUJBQXFCLENBQXdDLEdBQVMsRUFBRSxFQUFVO0lBQ3ZGLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBQ0QsTUFBTSxhQUFhLEdBQUcscUJBQXFCLENBQWlCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVwRSxJQUFJLGFBQWEsRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUNuRDtLQUFNO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0NBQ3BDO0FBSUQsK0JBQStCO0FBQy9CLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxFQUFtQixDQUFDO0FBRWpELFNBQVMsa0JBQWtCLENBQXFCLEdBQVMsRUFBRSxFQUFVLEVBQUUsY0FBdUIsRUFBRSxDQUFTO0lBQ3JHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBQ0Qsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdGLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUzRixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFNdEQsb0VBQW9FO0FBQ3BFLG9CQUFvQjtBQUNwQix1REFBdUQ7QUFDdkQsV0FBVztBQUNYLHdDQUF3QztBQUN4QyxJQUFJO0FBR0osbURBQW1EO0FBRW5ELDREQUE0RDtBQUM1RCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHByb2R1Y3RzLCBib29rcyB9IGZyb20gJy4vcHJvZHVjdC1jb2xsZWN0aW9uLmpzJ1xuaW1wb3J0IHsgY2FydCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG5pbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuaW1wb3J0IHsgTXlNYXAgfSBmcm9tICcuL2NvbW1vbi9NeU1hcC5qcydcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vcHJvZHVjdC1jb2xsZWN0aW9uLmpzJ1xuXG4vLyBpbXBvcnQgeyBOb3RlcGFkIH0gZnJvbSAnLi9ub3RlcGFkLmpzJ1xuLy8gaW1wb3J0IHsgQWxidW0gfSBmcm9tICcuL2FsYnVtLmpzJ1xuLy8gaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbi8vIGltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2Jvb2suanMnXG5cblxuLy8gZnVuY3Rpb24gZmluZFN1aXRhYmxlQm9vayhnZW5yZTogc3RyaW5nLCBwYWdlc0xpbWl0OiBudW1iZXIsIG11bHRpcGxlUmVjb21tZW5kYXRpb25zID0gdHJ1ZSk6IEJvb2sgfCBCb29rW10ge1xuLy8gICBjb25zdCBmaW5kQWxnb3JpdGhtID0gKGJvb2s6IEJvb2spID0+IHtcbi8vICAgICByZXR1cm4gYm9vay5nZW5yZSA9PT0gZ2VucmUgJiYgYm9vay5wcmljZSA8PSBwYWdlc0xpbWl0XG4vLyAgIH1cblxuLy8gICBpZiAobXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMpIHtcbi8vICAgICByZXR1cm4gYm9va3MuZmlsdGVyKGZpbmRBbGdvcml0aG0pXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuIGJvb2tzLmZpbmQoZmluZEFsZ29yaXRobSlcbi8vICAgfVxuLy8gfVxuLy8gY29uc3QgcmVjb21tZW5kZWRCb29rID0gZmluZFN1aXRhYmxlQm9vaygnZmFudGFzeScsIDEwMDApXG4vLyBpZiAocmVjb21tZW5kZWRCb29rIGluc3RhbmNlb2YgQm9vaykge1xuLy8gICBjb25zb2xlLmxvZyhyZWNvbW1lbmRlZEJvb2submFtZSlcbi8vIH0gZWxzZSB7XG4vLyAgIGNvbnNvbGUubG9nKHJlY29tbWVuZGVkQm9va1swXS5uYW1lKVxuLy8gfVxuXG4vLyBib29rcy5mb3JFYWNoKGJvb2sgPT4gY29uc29sZS5sb2coYm9vay5uYW1lLCBib29rLmNhbkJ1eSgpKSk7XG5cbi8vIGZ1bmN0aW9uIHNob3dEYXRhKHByb2R1Y3Q6IHVua25vd24pOiB2b2lkIHtcbi8vICAgaWYgKHByb2R1Y3QgaW5zdGFuY2VvZiBCb29rKSB7XG4vLyAgICAgY29uc29sZS5sb2coYCR7cHJvZHVjdC5uYW1lfSAtICR7cHJvZHVjdC5nZW5yZX0gLSAke2dldEF1dGhvcihwcm9kdWN0KX0gLSAke3Byb2R1Y3QuY2FuQnV5KCl9YClcbi8vICAgfSBlbHNlIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgTm90ZXBhZCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGAke3Byb2R1Y3QubmFtZX0gLSAke3Byb2R1Y3QuY2FuQnV5KCl9IC0gJHtnZXRQcmljZShwcm9kdWN0KX1gKVxuLy8gICB9IGVsc2UgaWYgKHByb2R1Y3QgaW5zdGFuY2VvZiBBbGJ1bSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGAke3Byb2R1Y3QubmFtZX0tJHtwcm9kdWN0LmNhbkJ1eSgpfS0ke3Byb2R1Y3Qud2lkdGh9WCR7cHJvZHVjdC5sZW5ndGh9YClcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvci5Vbmtub3duIHR5cGUnKTtcbi8vICAgfVxuLy8gfVxuLy8gZnVuY3Rpb24gZ2V0UHJpY2UocHJvZHVjdDogQm9vayB8IE5vdGVwYWQpOiBzdHJpbmcge1xuLy8gICByZXR1cm4gcHJvZHVjdC5wcmljZSA/IHByb2R1Y3QucHJpY2UudG9TdHJpbmcoKSA6ICfQndC10YIg0LIg0L/RgNC+0LTQsNC20LUnXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldEF1dGhvcihwcm9kdWN0OiBCb29rKTogc3RyaW5nIHtcbi8vICAgcmV0dXJuIHByb2R1Y3QuYXV0aG9yID8gcHJvZHVjdC5hdXRob3IubmFtZSArIHByb2R1Y3QuYXV0aG9yLnN1cm5hbWUgOiAn0JDQstGC0L7RgCDQvdC1INGD0LrQsNC30LDQvSdcbi8vIH1cblxuXG4vLyDQl9Cw0LTQsNC90LjQtSAxINGE0YPQvdC60YbQuNGPICBnZXRGcm9tIFxuZnVuY3Rpb24gZ2V0UHJvZHVjdEZyb21DYXRhbG9nPFR5cGUgZXh0ZW5kcyBNeU1hcCwgVCBleHRlbmRzIFByb2R1Y3Q+KG9iajogVHlwZSwgaWQ6IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBvYmouZ2V0KGlkKTtcbn1cbmNvbnN0IGNob3NlblByb2R1Y3QgPSBnZXRQcm9kdWN0RnJvbUNhdGFsb2c8TXlNYXAsIFByb2R1Y3Q+KG1hcCwgMik7XG5cbmlmIChjaG9zZW5Qcm9kdWN0KSB7XG4gICAgY29uc29sZS5sb2coYNCS0Ysg0LLRi9Cx0YDQsNC70LggJHtjaG9zZW5Qcm9kdWN0Lm5hbWV9YCk7XG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCfQndC10YIg0YLQsNC60L7Qs9C+INGC0L7QstCw0YDQsCcpO1xufVxuXG5cblxuLy8g0JfQsNC00LDQvdC40LUgMyDQutC+0YDQt9C40L3QsCDQuCDRhNGD0L3QutGG0LjRjyBcbmNvbnN0IGNhcnRXaXRoTWFwID0gbmV3IE15TWFwPG51bWJlciwgUHJvZHVjdD4oKTtcblxuZnVuY3Rpb24gZ2V0UHJvZHVjdHNGb3JDYXJ0PFR5cGUgZXh0ZW5kcyBNeU1hcD4ob2JqOiBUeXBlLCBpZDogbnVtYmVyLCBwcm9kdWN0Rm9yQ2FydDogUHJvZHVjdCwgUTogbnVtYmVyKTogVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgb2JqLnNldChpZCwgcHJvZHVjdEZvckNhcnQpO1xuICAgIG9iai5nZXQoaWQpWydvcmRlcmVkUXVhbnRpdHknXSA9IFE7XG4gICAgcmV0dXJuIG9iajtcbn1cbmdldFByb2R1Y3RzRm9yQ2FydChjYXJ0V2l0aE1hcCwgMSwgbmV3IEJvb2soJ0xvcmQgb2YgdGhlIFJpbmcnLCAnZmFudGFzeScsICdoYXJkJywgMTAwMSksIDMpO1xuZ2V0UHJvZHVjdHNGb3JDYXJ0KGNhcnRXaXRoTWFwLCAyLCBuZXcgQm9vaygnR2FtZSBvZiBUaHJvbmVzJywgJ2ZhbnRhc3knLCAnc29mdCcsIDIyMCksIDIpO1xuXG5jb25zb2xlLmxvZyhg0JrQvtGA0LfQuNC90LAgJHtKU09OLnN0cmluZ2lmeShjYXJ0V2l0aE1hcCl9YCk7XG5cblxuXG5cblxuLy8gY29uc3QgY2hvc2VuQm9vayA9IGdldFByb2R1Y3RGcm9tQ2F0YWxvZzxQcm9kdWN0PGFueT4+KGJvb2tzLCAzKTtcbi8vIGlmIChjaG9zZW5Cb29rKSB7XG4vLyAgICAgY29uc29sZS5sb2coYNCS0Ysg0LLRi9Cx0YDQsNC70LggJHsgY2hvc2VuQm9vay5uYW1lIH0gYCk7XG4vLyB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKCfQndC10YIg0YLQsNC60L7Qs9C+INGC0L7QstCw0YDQsCcpO1xuLy8gfVxuXG5cbi8vIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiBwcm9kdWN0LnNob3dEYXRhKCkpO1xuXG4vLyBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4gcHJvZHVjdC5idXlQcm9kdWN0KHByb2R1Y3QpKTtcbi8vIGNvbnNvbGUubG9nKGNhcnQpO1xuXG5cblxuXG5cbiJdfQ==