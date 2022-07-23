import { products } from './product-collection.js';
import { cart } from './product.js';
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
products.forEach(product => product.showData());
products.forEach(product => product.buyProduct(product));
console.log(cart);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFFbkMseUNBQXlDO0FBQ3pDLHFDQUFxQztBQUNyQyx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBR25DLGdIQUFnSDtBQUNoSCw0Q0FBNEM7QUFDNUMsOERBQThEO0FBQzlELE1BQU07QUFFTixtQ0FBbUM7QUFDbkMseUNBQXlDO0FBQ3pDLGFBQWE7QUFDYix1Q0FBdUM7QUFDdkMsTUFBTTtBQUNOLElBQUk7QUFDSiw0REFBNEQ7QUFDNUQseUNBQXlDO0FBQ3pDLHNDQUFzQztBQUN0QyxXQUFXO0FBQ1gseUNBQXlDO0FBQ3pDLElBQUk7QUFFSixnRUFBZ0U7QUFFaEUsOENBQThDO0FBQzlDLG1DQUFtQztBQUNuQyxzR0FBc0c7QUFDdEcsNkNBQTZDO0FBQzdDLGtGQUFrRjtBQUNsRiwyQ0FBMkM7QUFDM0MsNEZBQTRGO0FBQzVGLGFBQWE7QUFDYiwyQ0FBMkM7QUFDM0MsTUFBTTtBQUNOLElBQUk7QUFDSix1REFBdUQ7QUFDdkQsc0VBQXNFO0FBQ3RFLElBQUk7QUFFSiw4Q0FBOEM7QUFDOUMsNkZBQTZGO0FBQzdGLElBQUk7QUFHSixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFFaEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gJy4vcHJvZHVjdC1jb2xsZWN0aW9uLmpzJ1xuaW1wb3J0IHsgY2FydCB9IGZyb20gJy4vcHJvZHVjdC5qcydcblxuLy8gaW1wb3J0IHsgTm90ZXBhZCB9IGZyb20gJy4vbm90ZXBhZC5qcydcbi8vIGltcG9ydCB7IEFsYnVtIH0gZnJvbSAnLi9hbGJ1bS5qcydcbi8vIGltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG4vLyBpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuXG5cbi8vIGZ1bmN0aW9uIGZpbmRTdWl0YWJsZUJvb2soZ2VucmU6IHN0cmluZywgcGFnZXNMaW1pdDogbnVtYmVyLCBtdWx0aXBsZVJlY29tbWVuZGF0aW9ucyA9IHRydWUpOiBCb29rIHwgQm9va1tdIHtcbi8vICAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiB7XG4vLyAgICAgcmV0dXJuIGJvb2suZ2VucmUgPT09IGdlbnJlICYmIGJvb2sucHJpY2UgPD0gcGFnZXNMaW1pdFxuLy8gICB9XG5cbi8vICAgaWYgKG11bHRpcGxlUmVjb21tZW5kYXRpb25zKSB7XG4vLyAgICAgcmV0dXJuIGJvb2tzLmZpbHRlcihmaW5kQWxnb3JpdGhtKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiBib29rcy5maW5kKGZpbmRBbGdvcml0aG0pXG4vLyAgIH1cbi8vIH1cbi8vIGNvbnN0IHJlY29tbWVuZGVkQm9vayA9IGZpbmRTdWl0YWJsZUJvb2soJ2ZhbnRhc3knLCAxMDAwKVxuLy8gaWYgKHJlY29tbWVuZGVkQm9vayBpbnN0YW5jZW9mIEJvb2spIHtcbi8vICAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rLm5hbWUpXG4vLyB9IGVsc2Uge1xuLy8gICBjb25zb2xlLmxvZyhyZWNvbW1lbmRlZEJvb2tbMF0ubmFtZSlcbi8vIH1cblxuLy8gYm9va3MuZm9yRWFjaChib29rID0+IGNvbnNvbGUubG9nKGJvb2submFtZSwgYm9vay5jYW5CdXkoKSkpO1xuXG4vLyBmdW5jdGlvbiBzaG93RGF0YShwcm9kdWN0OiB1bmtub3duKTogdm9pZCB7XG4vLyAgIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQm9vaykge1xuLy8gICAgIGNvbnNvbGUubG9nKGAke3Byb2R1Y3QubmFtZX0gLSAke3Byb2R1Y3QuZ2VucmV9IC0gJHtnZXRBdXRob3IocHJvZHVjdCl9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfWApXG4vLyAgIH0gZWxzZSBpZiAocHJvZHVjdCBpbnN0YW5jZW9mIE5vdGVwYWQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfSAtICR7Z2V0UHJpY2UocHJvZHVjdCl9YClcbi8vICAgfSBlbHNlIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQWxidW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9LSR7cHJvZHVjdC5jYW5CdXkoKX0tJHtwcm9kdWN0LndpZHRofVgke3Byb2R1Y3QubGVuZ3RofWApXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IuVW5rbm93biB0eXBlJyk7XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGdldFByaWNlKHByb2R1Y3Q6IEJvb2sgfCBOb3RlcGFkKTogc3RyaW5nIHtcbi8vICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPyBwcm9kdWN0LnByaWNlLnRvU3RyaW5nKCkgOiAn0J3QtdGCINCyINC/0YDQvtC00LDQttC1J1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRBdXRob3IocHJvZHVjdDogQm9vayk6IHN0cmluZyB7XG4vLyAgIHJldHVybiBwcm9kdWN0LmF1dGhvciA/IHByb2R1Y3QuYXV0aG9yLm5hbWUgKyBwcm9kdWN0LmF1dGhvci5zdXJuYW1lIDogJ9CQ0LLRgtC+0YAg0L3QtSDRg9C60LDQt9Cw0L0nXG4vLyB9XG5cblxucHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHByb2R1Y3Quc2hvd0RhdGEoKSk7XG5cbnByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiBwcm9kdWN0LmJ1eVByb2R1Y3QocHJvZHVjdCkpO1xuY29uc29sZS5sb2coY2FydCk7XG5cblxuXG5cblxuIl19