import { products, books } from './product-collection.js';
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
function getProductFromCatalog(array, title) {
    const product = array.find(product => product.name.toLowerCase() === title.toLowerCase());
    return product;
}
const chosenProduct = getProductFromCatalog(products, 'Notepad');
if (chosenProduct) {
    console.log(`Вы выбрали ${chosenProduct.name}`);
}
else {
    console.log('Нет такого товара');
}
const chosenBook = getProductFromCatalog(books, 'Lord of the Ring');
if (chosenBook) {
    console.log(`Вы выбрали ${chosenBook.name}`);
}
else {
    console.log('Нет такого товара');
}
// products.forEach(product => product.showData());
// products.forEach(product => product.buyProduct(product));
// console.log(cart);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUt6RCx5Q0FBeUM7QUFDekMscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6QyxtQ0FBbUM7QUFHbkMsZ0hBQWdIO0FBQ2hILDRDQUE0QztBQUM1Qyw4REFBOEQ7QUFDOUQsTUFBTTtBQUVOLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFDekMsYUFBYTtBQUNiLHVDQUF1QztBQUN2QyxNQUFNO0FBQ04sSUFBSTtBQUNKLDREQUE0RDtBQUM1RCx5Q0FBeUM7QUFDekMsc0NBQXNDO0FBQ3RDLFdBQVc7QUFDWCx5Q0FBeUM7QUFDekMsSUFBSTtBQUVKLGdFQUFnRTtBQUVoRSw4Q0FBOEM7QUFDOUMsbUNBQW1DO0FBQ25DLHNHQUFzRztBQUN0Ryw2Q0FBNkM7QUFDN0Msa0ZBQWtGO0FBQ2xGLDJDQUEyQztBQUMzQyw0RkFBNEY7QUFDNUYsYUFBYTtBQUNiLDJDQUEyQztBQUMzQyxNQUFNO0FBQ04sSUFBSTtBQUNKLHVEQUF1RDtBQUN2RCxzRUFBc0U7QUFDdEUsSUFBSTtBQUVKLDhDQUE4QztBQUM5Qyw2RkFBNkY7QUFDN0YsSUFBSTtBQUVKLFNBQVMscUJBQXFCLENBQXVCLEtBQWUsRUFBRSxLQUFhO0lBQy9FLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFHRCxNQUFNLGFBQWEsR0FBRyxxQkFBcUIsQ0FBZSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDL0UsSUFBSSxhQUFhLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Q0FDbkQ7S0FBTTtJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztDQUNwQztBQUVELE1BQU0sVUFBVSxHQUFHLHFCQUFxQixDQUFlLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xGLElBQUksVUFBVSxFQUFFO0lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQ2hEO0tBQU07SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Q0FDcEM7QUFNRCxtREFBbUQ7QUFFbkQsNERBQTREO0FBQzVELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgcHJvZHVjdHMsIGJvb2tzIH0gZnJvbSAnLi9wcm9kdWN0LWNvbGxlY3Rpb24uanMnXG5pbXBvcnQgeyBjYXJ0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdCdcbmltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2Jvb2snXG5cbi8vIGltcG9ydCB7IE5vdGVwYWQgfSBmcm9tICcuL25vdGVwYWQuanMnXG4vLyBpbXBvcnQgeyBBbGJ1bSB9IGZyb20gJy4vYWxidW0uanMnXG4vLyBpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuLy8gaW1wb3J0IHsgQm9vayB9IGZyb20gJy4vYm9vay5qcydcblxuXG4vLyBmdW5jdGlvbiBmaW5kU3VpdGFibGVCb29rKGdlbnJlOiBzdHJpbmcsIHBhZ2VzTGltaXQ6IG51bWJlciwgbXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMgPSB0cnVlKTogQm9vayB8IEJvb2tbXSB7XG4vLyAgIGNvbnN0IGZpbmRBbGdvcml0aG0gPSAoYm9vazogQm9vaykgPT4ge1xuLy8gICAgIHJldHVybiBib29rLmdlbnJlID09PSBnZW5yZSAmJiBib29rLnByaWNlIDw9IHBhZ2VzTGltaXRcbi8vICAgfVxuXG4vLyAgIGlmIChtdWx0aXBsZVJlY29tbWVuZGF0aW9ucykge1xuLy8gICAgIHJldHVybiBib29rcy5maWx0ZXIoZmluZEFsZ29yaXRobSlcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gYm9va3MuZmluZChmaW5kQWxnb3JpdGhtKVxuLy8gICB9XG4vLyB9XG4vLyBjb25zdCByZWNvbW1lbmRlZEJvb2sgPSBmaW5kU3VpdGFibGVCb29rKCdmYW50YXN5JywgMTAwMClcbi8vIGlmIChyZWNvbW1lbmRlZEJvb2sgaW5zdGFuY2VvZiBCb29rKSB7XG4vLyAgIGNvbnNvbGUubG9nKHJlY29tbWVuZGVkQm9vay5uYW1lKVxuLy8gfSBlbHNlIHtcbi8vICAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rWzBdLm5hbWUpXG4vLyB9XG5cbi8vIGJvb2tzLmZvckVhY2goYm9vayA9PiBjb25zb2xlLmxvZyhib29rLm5hbWUsIGJvb2suY2FuQnV5KCkpKTtcblxuLy8gZnVuY3Rpb24gc2hvd0RhdGEocHJvZHVjdDogdW5rbm93bik6IHZvaWQge1xuLy8gICBpZiAocHJvZHVjdCBpbnN0YW5jZW9mIEJvb2spIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LmdlbnJlfSAtICR7Z2V0QXV0aG9yKHByb2R1Y3QpfSAtICR7cHJvZHVjdC5jYW5CdXkoKX1gKVxuLy8gICB9IGVsc2UgaWYgKHByb2R1Y3QgaW5zdGFuY2VvZiBOb3RlcGFkKSB7XG4vLyAgICAgY29uc29sZS5sb2coYCR7cHJvZHVjdC5uYW1lfSAtICR7cHJvZHVjdC5jYW5CdXkoKX0gLSAke2dldFByaWNlKHByb2R1Y3QpfWApXG4vLyAgIH0gZWxzZSBpZiAocHJvZHVjdCBpbnN0YW5jZW9mIEFsYnVtKSB7XG4vLyAgICAgY29uc29sZS5sb2coYCR7cHJvZHVjdC5uYW1lfS0ke3Byb2R1Y3QuY2FuQnV5KCl9LSR7cHJvZHVjdC53aWR0aH1YJHtwcm9kdWN0Lmxlbmd0aH1gKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yLlVua25vd24gdHlwZScpO1xuLy8gICB9XG4vLyB9XG4vLyBmdW5jdGlvbiBnZXRQcmljZShwcm9kdWN0OiBCb29rIHwgTm90ZXBhZCk6IHN0cmluZyB7XG4vLyAgIHJldHVybiBwcm9kdWN0LnByaWNlID8gcHJvZHVjdC5wcmljZS50b1N0cmluZygpIDogJ9Cd0LXRgiDQsiDQv9GA0L7QtNCw0LbQtSdcbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0QXV0aG9yKHByb2R1Y3Q6IEJvb2spOiBzdHJpbmcge1xuLy8gICByZXR1cm4gcHJvZHVjdC5hdXRob3IgPyBwcm9kdWN0LmF1dGhvci5uYW1lICsgcHJvZHVjdC5hdXRob3Iuc3VybmFtZSA6ICfQkNCy0YLQvtGAINC90LUg0YPQutCw0LfQsNC9J1xuLy8gfVxuXG5mdW5jdGlvbiBnZXRQcm9kdWN0RnJvbUNhdGFsb2c8VCBleHRlbmRzIFByb2R1Y3Q8VD4+KGFycmF5OiBBcnJheTxUPiwgdGl0bGU6IHN0cmluZyk6IFQgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBhcnJheS5maW5kKHByb2R1Y3QgPT4gcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRpdGxlLnRvTG93ZXJDYXNlKCkpO1xuICAgIHJldHVybiBwcm9kdWN0O1xufVxuXG5cbmNvbnN0IGNob3NlblByb2R1Y3QgPSBnZXRQcm9kdWN0RnJvbUNhdGFsb2c8UHJvZHVjdDxhbnk+Pihwcm9kdWN0cywgJ05vdGVwYWQnKTtcbmlmIChjaG9zZW5Qcm9kdWN0KSB7XG4gICAgY29uc29sZS5sb2coYNCS0Ysg0LLRi9Cx0YDQsNC70LggJHtjaG9zZW5Qcm9kdWN0Lm5hbWV9YCk7XG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCfQndC10YIg0YLQsNC60L7Qs9C+INGC0L7QstCw0YDQsCcpO1xufVxuXG5jb25zdCBjaG9zZW5Cb29rID0gZ2V0UHJvZHVjdEZyb21DYXRhbG9nPFByb2R1Y3Q8YW55Pj4oYm9va3MsICdMb3JkIG9mIHRoZSBSaW5nJyk7XG5pZiAoY2hvc2VuQm9vaykge1xuICAgIGNvbnNvbGUubG9nKGDQktGLINCy0YvQsdGA0LDQu9C4ICR7Y2hvc2VuQm9vay5uYW1lfWApO1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygn0J3QtdGCINGC0LDQutC+0LPQviDRgtC+0LLQsNGA0LAnKTtcbn1cblxuXG5cblxuXG4vLyBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4gcHJvZHVjdC5zaG93RGF0YSgpKTtcblxuLy8gcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHByb2R1Y3QuYnV5UHJvZHVjdChwcm9kdWN0KSk7XG4vLyBjb25zb2xlLmxvZyhjYXJ0KTtcblxuXG5cblxuXG4iXX0=