// import { Book } from './book.js'
const main = () => {
    function getGenreIcon(num) {
        let code;
        switch (num) {
            case 1:
                code = 1;
                break;
            case 2:
                code = 2;
                break;
            default:
                code = 3;
        }
        return code;
    }
    console.log(getGenreIcon(2));
    const getNumber = (num) => {
        if (typeof num === 'number') {
            return num;
        }
        else {
            num;
        }
        return 100;
    };
    try {
        throw 'error';
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        if (typeof error === 'string') {
            console.log(error.toUpperCase());
        }
    }
    const Person = {
        age: 40,
        getAge: function (num) {
            return this.age * num;
        }
    };
    const Andrey = {
        age: 21,
    };
    console.log(Person.getAge.call(Andrey, 5));
};
main();
export {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0EsbUNBQW1DO0FBSW5DLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUVkLFNBQVMsWUFBWSxDQUFDLEdBQVU7UUFDNUIsSUFBSSxJQUFZLENBQUM7UUFDakIsUUFBUSxHQUFHLEVBQUU7WUFDVCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDVCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ1QsTUFBTTtZQUNWO2dCQUNJLElBQUksR0FBRyxDQUFDLENBQUE7U0FFZjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHN0IsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFvQixFQUFVLEVBQUU7UUFDL0MsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsT0FBTyxHQUFHLENBQUE7U0FDYjthQUFNO1lBQ0gsR0FBRyxDQUFBO1NBQ047UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUMsQ0FBQTtJQUdELElBQUk7UUFDQSxNQUFNLE9BQU8sQ0FBQztLQUNqQjtJQUFDLE9BQU8sS0FBYyxFQUFFO1FBQ3JCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDcEM7S0FDSjtJQUdELE1BQU0sTUFBTSxHQUFHO1FBQ1gsR0FBRyxFQUFFLEVBQUU7UUFDUCxNQUFNLEVBQUUsVUFBVSxHQUFXO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDekIsQ0FBQztLQUNKLENBQUE7SUFDRCxNQUFNLE1BQU0sR0FBRztRQUNYLEdBQUcsRUFBRSxFQUFFO0tBQ1YsQ0FBQTtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFL0MsQ0FBQyxDQUFBO0FBQ0QsSUFBSSxFQUFFLENBQUM7O0FBSVAsZ0hBQWdIO0FBQ2hILDRDQUE0QztBQUM1Qyw4REFBOEQ7QUFDOUQsTUFBTTtBQUVOLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFDekMsYUFBYTtBQUNiLHVDQUF1QztBQUN2QyxNQUFNO0FBQ04sSUFBSTtBQUNKLDREQUE0RDtBQUM1RCx5Q0FBeUM7QUFDekMsc0NBQXNDO0FBQ3RDLFdBQVc7QUFDWCx5Q0FBeUM7QUFDekMsSUFBSTtBQUVKLGdFQUFnRTtBQUVoRSw4Q0FBOEM7QUFDOUMsbUNBQW1DO0FBQ25DLHNHQUFzRztBQUN0Ryw2Q0FBNkM7QUFDN0Msa0ZBQWtGO0FBQ2xGLDJDQUEyQztBQUMzQyw0RkFBNEY7QUFDNUYsYUFBYTtBQUNiLDJDQUEyQztBQUMzQyxNQUFNO0FBQ04sSUFBSTtBQUNKLHVEQUF1RDtBQUN2RCxzRUFBc0U7QUFDdEUsSUFBSTtBQUVKLDhDQUE4QztBQUM5Qyw2RkFBNkY7QUFDN0YsSUFBSTtBQUdKLDhCQUE4QjtBQUM5QixnSEFBZ0g7QUFDaEgsMEJBQTBCO0FBQzFCLElBQUk7QUFDSix1RUFBdUU7QUFFdkUsdUJBQXVCO0FBQ3ZCLHVEQUF1RDtBQUN2RCxXQUFXO0FBQ1gsd0NBQXdDO0FBQ3hDLElBQUk7QUFJSiwrQkFBK0I7QUFDL0Isb0RBQW9EO0FBRXBELGlJQUFpSTtBQUNqSSxtQ0FBbUM7QUFDbkMsMENBQTBDO0FBQzFDLGtCQUFrQjtBQUNsQixJQUFJO0FBQ0osZ0dBQWdHO0FBQ2hHLDhGQUE4RjtBQUU5Rix5REFBeUQ7QUFHekQsb0VBQW9FO0FBQ3BFLG9CQUFvQjtBQUNwQix1REFBdUQ7QUFDdkQsV0FBVztBQUNYLHdDQUF3QztBQUN4QyxJQUFJO0FBR0osbURBQW1EO0FBRW5ELDREQUE0RDtBQUM1RCxxQkFBcUI7QUFJckIsb0NBQW9DO0FBRXBDLHNIQUFzSDtBQUN0SCxrREFBa0Q7QUFDbEQsNkNBQTZDO0FBQzdDLHVCQUF1QjtBQUN2Qiw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLCtCQUErQjtBQUMvQixZQUFZO0FBQ1osU0FBUztBQUNULEtBQUs7QUFDTCw2QkFBNkI7QUFDN0Isa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUMzQixrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYiw0QkFBNEI7QUFDNUIsMkNBQTJDO0FBQzNDLDRCQUE0QjtBQUM1QixjQUFjO0FBQ2QsSUFBSTtBQUVKLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osMERBQTBEO0FBQzFELDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEIsOEJBQThCO0FBQzlCLFFBQVE7QUFFUix3QkFBd0I7QUFDeEIsSUFBSTtBQUVKLFVBQVU7QUFHViwwQkFBMEI7QUFDMUIsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkIsOEJBQThCO0FBQzlCLGVBQWU7QUFDZiw2REFBNkQ7QUFDN0QsUUFBUTtBQUNSLE1BQU07QUFFTiw2RUFBNkU7QUFDN0Usd0RBQXdEO0FBQ3hELCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFHN0IsOENBQThDO0FBQzlDLHdEQUF3RDtBQUV4RCxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHByb2R1Y3RzLCBib29rcyB9IGZyb20gJy4vcHJvZHVjdC1jb2xsZWN0aW9uLmpzJ1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlckNsYXNzLmpzJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vY29tbW9uL0xvZ2dlci5qcydcbi8vIGltcG9ydCB7IGNhcnQgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG4vLyBpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuaW1wb3J0IHsgQm9vayB9IGZyb20gJy4vYm9vay5qcydcbi8vIGltcG9ydCB7IE15TWFwIH0gZnJvbSAnLi9jb21tb24vTXlNYXAuanMnXG4vLyBpbXBvcnQgeyBtYXAgfSBmcm9tICcuL3Byb2R1Y3QtY29sbGVjdGlvbi5qcydcbi8vIGltcG9ydCB7IHRvVXBwZXJDYXNlIH0gZnJvbSAnLi9zdHJpbmctaGVscGVyLmpzJ1xuLy8gaW1wb3J0IHsgSUJvb2ssIElPcHRpb25zLCBzZWFyY2ggfSBmcm9tICdnb29nbGUtYm9va3Mtc2VhcmNoJ1xuLy8gaW1wb3J0IHsgTm90ZXBhZCB9IGZyb20gJy4vbm90ZXBhZC5qcydcbi8vIGltcG9ydCB7IEFsYnVtIH0gZnJvbSAnLi9hbGJ1bS5qcydcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG4vLyBpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuXG5cblxuY29uc3QgbWFpbiA9ICgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGdldEdlbnJlSWNvbihudW06IDEgfCAyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGNvZGU6IG51bWJlcjtcbiAgICAgICAgc3dpdGNoIChudW0pIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjb2RlID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjb2RlID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29kZSA9IDNcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2RlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGdldEdlbnJlSWNvbigyKSk7XG5cblxuICAgIGNvbnN0IGdldE51bWJlciA9IChudW06IG51bWJlciB8IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVtXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDEwMDtcbiAgICB9XG5cblxuICAgIHRyeSB7XG4gICAgICAgIHRocm93ICdlcnJvcic7XG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgUGVyc29uID0ge1xuICAgICAgICBhZ2U6IDQwLFxuICAgICAgICBnZXRBZ2U6IGZ1bmN0aW9uIChudW06IG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWdlICogbnVtXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgQW5kcmV5ID0ge1xuICAgICAgICBhZ2U6IDIxLFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhQZXJzb24uZ2V0QWdlLmNhbGwoQW5kcmV5LCA1KSk7XG5cbn1cbm1haW4oKTtcblxuXG5cbi8vIGZ1bmN0aW9uIGZpbmRTdWl0YWJsZUJvb2soZ2VucmU6IHN0cmluZywgcGFnZXNMaW1pdDogbnVtYmVyLCBtdWx0aXBsZVJlY29tbWVuZGF0aW9ucyA9IHRydWUpOiBCb29rIHwgQm9va1tdIHtcbi8vICAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiB7XG4vLyAgICAgcmV0dXJuIGJvb2suZ2VucmUgPT09IGdlbnJlICYmIGJvb2sucHJpY2UgPD0gcGFnZXNMaW1pdFxuLy8gICB9XG5cbi8vICAgaWYgKG11bHRpcGxlUmVjb21tZW5kYXRpb25zKSB7XG4vLyAgICAgcmV0dXJuIGJvb2tzLmZpbHRlcihmaW5kQWxnb3JpdGhtKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiBib29rcy5maW5kKGZpbmRBbGdvcml0aG0pXG4vLyAgIH1cbi8vIH1cbi8vIGNvbnN0IHJlY29tbWVuZGVkQm9vayA9IGZpbmRTdWl0YWJsZUJvb2soJ2ZhbnRhc3knLCAxMDAwKVxuLy8gaWYgKHJlY29tbWVuZGVkQm9vayBpbnN0YW5jZW9mIEJvb2spIHtcbi8vICAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rLm5hbWUpXG4vLyB9IGVsc2Uge1xuLy8gICBjb25zb2xlLmxvZyhyZWNvbW1lbmRlZEJvb2tbMF0ubmFtZSlcbi8vIH1cblxuLy8gYm9va3MuZm9yRWFjaChib29rID0+IGNvbnNvbGUubG9nKGJvb2submFtZSwgYm9vay5jYW5CdXkoKSkpO1xuXG4vLyBmdW5jdGlvbiBzaG93RGF0YShwcm9kdWN0OiB1bmtub3duKTogdm9pZCB7XG4vLyAgIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQm9vaykge1xuLy8gICAgIGNvbnNvbGUubG9nKGAke3Byb2R1Y3QubmFtZX0gLSAke3Byb2R1Y3QuZ2VucmV9IC0gJHtnZXRBdXRob3IocHJvZHVjdCl9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfWApXG4vLyAgIH0gZWxzZSBpZiAocHJvZHVjdCBpbnN0YW5jZW9mIE5vdGVwYWQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LmNhbkJ1eSgpfSAtICR7Z2V0UHJpY2UocHJvZHVjdCl9YClcbi8vICAgfSBlbHNlIGlmIChwcm9kdWN0IGluc3RhbmNlb2YgQWxidW0pIHtcbi8vICAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0Lm5hbWV9LSR7cHJvZHVjdC5jYW5CdXkoKX0tJHtwcm9kdWN0LndpZHRofVgke3Byb2R1Y3QubGVuZ3RofWApXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IuVW5rbm93biB0eXBlJyk7XG4vLyAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGdldFByaWNlKHByb2R1Y3Q6IEJvb2sgfCBOb3RlcGFkKTogc3RyaW5nIHtcbi8vICAgcmV0dXJuIHByb2R1Y3QucHJpY2UgPyBwcm9kdWN0LnByaWNlLnRvU3RyaW5nKCkgOiAn0J3QtdGCINCyINC/0YDQvtC00LDQttC1J1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRBdXRob3IocHJvZHVjdDogQm9vayk6IHN0cmluZyB7XG4vLyAgIHJldHVybiBwcm9kdWN0LmF1dGhvciA/IHByb2R1Y3QuYXV0aG9yLm5hbWUgKyBwcm9kdWN0LmF1dGhvci5zdXJuYW1lIDogJ9CQ0LLRgtC+0YAg0L3QtSDRg9C60LDQt9Cw0L0nXG4vLyB9XG5cblxuLy8g0JfQsNC00LDQvdC40LUgMSDRhNGD0L3QutGG0LjRjyAgZ2V0RnJvbSBcbi8vIGZ1bmN0aW9uIGdldFByb2R1Y3RGcm9tQ2F0YWxvZzxUeXBlIGV4dGVuZHMgTXlNYXAsIFQgZXh0ZW5kcyBQcm9kdWN0PihvYmo6IFR5cGUsIGlkOiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbi8vICAgICByZXR1cm4gb2JqLmdldChpZCk7XG4vLyB9XG4vLyBjb25zdCBjaG9zZW5Qcm9kdWN0ID0gZ2V0UHJvZHVjdEZyb21DYXRhbG9nPE15TWFwLCBQcm9kdWN0PihtYXAsIDIpO1xuXG4vLyBpZiAoY2hvc2VuUHJvZHVjdCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGDQktGLINCy0YvQsdGA0LDQu9C4ICR7Y2hvc2VuUHJvZHVjdC5uYW1lfWApO1xuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZygn0J3QtdGCINGC0LDQutC+0LPQviDRgtC+0LLQsNGA0LAnKTtcbi8vIH1cblxuXG5cbi8vINCX0LDQtNCw0L3QuNC1IDMg0LrQvtGA0LfQuNC90LAg0Lgg0YTRg9C90LrRhtC40Y8gXG4vLyBjb25zdCBjYXJ0V2l0aE1hcCA9IG5ldyBNeU1hcDxudW1iZXIsIFByb2R1Y3Q+KCk7XG5cbi8vIGZ1bmN0aW9uIGdldFByb2R1Y3RzRm9yQ2FydDxUeXBlIGV4dGVuZHMgTXlNYXA+KG9iajogVHlwZSwgaWQ6IG51bWJlciwgcHJvZHVjdEZvckNhcnQ6IFByb2R1Y3QsIFE6IG51bWJlcik6IFR5cGUgfCB1bmRlZmluZWQge1xuLy8gICAgIG9iai5zZXQoaWQsIHByb2R1Y3RGb3JDYXJ0KTtcbi8vICAgICBvYmouZ2V0KGlkKVsnb3JkZXJlZFF1YW50aXR5J10gPSBRO1xuLy8gICAgIHJldHVybiBvYmo7XG4vLyB9XG4vLyBnZXRQcm9kdWN0c0ZvckNhcnQoY2FydFdpdGhNYXAsIDEsIG5ldyBCb29rKCdMb3JkIG9mIHRoZSBSaW5nJywgJ2ZhbnRhc3knLCAnaGFyZCcsIDEwMDEpLCAzKTtcbi8vIGdldFByb2R1Y3RzRm9yQ2FydChjYXJ0V2l0aE1hcCwgMiwgbmV3IEJvb2soJ0dhbWUgb2YgVGhyb25lcycsICdmYW50YXN5JywgJ3NvZnQnLCAyMjApLCAyKTtcblxuLy8gY29uc29sZS5sb2coYNCa0L7RgNC30LjQvdCwICR7SlNPTi5zdHJpbmdpZnkoY2FydFdpdGhNYXApfWApO1xuXG5cbi8vIGNvbnN0IGNob3NlbkJvb2sgPSBnZXRQcm9kdWN0RnJvbUNhdGFsb2c8UHJvZHVjdDxhbnk+Pihib29rcywgMyk7XG4vLyBpZiAoY2hvc2VuQm9vaykge1xuLy8gICAgIGNvbnNvbGUubG9nKGDQktGLINCy0YvQsdGA0LDQu9C4ICR7IGNob3NlbkJvb2submFtZSB9IGApO1xuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZygn0J3QtdGCINGC0LDQutC+0LPQviDRgtC+0LLQsNGA0LAnKTtcbi8vIH1cblxuXG4vLyBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4gcHJvZHVjdC5zaG93RGF0YSgpKTtcblxuLy8gcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHByb2R1Y3QuYnV5UHJvZHVjdChwcm9kdWN0KSk7XG4vLyBjb25zb2xlLmxvZyhjYXJ0KTtcblxuXG5cbi8vIGNvbnNvbGUubG9nKHRvVXBwZXJDYXNlKCdzc2RzJykpO1xuXG4vLyBjb25zdCBzZWFyY2hCb29rcyA9IChxdWVyeTogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxJQm9va1tdPiA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgc2VhcmNoKHF1ZXJ5LCBvcHRpb25zLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuLy8gICAgICAgICAvLyByZWplY3QobmV3IEVycm9yKCdzb21lIGVycm9yJykpXG4vLyAgICAgICAgIGlmIChlcnJvcikge1xuLy8gICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pXG4vLyB9KVxuLy8gY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbi8vICAgICBzZWFyY2hCb29rcyhcIkhhcnJ5IFBvdHRlclwiKVxuLy8gICAgICAgICAudGhlbihib29rcyA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhib29rcyk7XG4vLyAgICAgICAgICAgICByZXR1cm4gYm9va3M7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcItCe0YjQuNCx0LrQsFwiLCBlcnJvcilcbi8vICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbi8vICAgICAgICAgfSk7XG4vLyB9XG5cbi8vIGNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBzZWFyY2hCb29rcygnSGFycnkgUG90ZXInKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coYm9va3MpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICB9XG5cbi8vICAgICBjb25zb2xlLmxvZygnMScpO1xuLy8gfVxuXG4vLyBtYWluKCk7XG5cblxuLy8gc2VhcmNoKCdIYXJyeSBQb3RlcicsIHtcbi8vICAgICBsaW1pdDogMlxuLy8gfSwgKGVycm9yLCByZXN1bHQpID0+IHtcbi8vICAgICBpZiAoZXJyb3IpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUuZGlyKHJlc3VsdCwgeyBkZXB0aDogbnVsbCwgY29sb3JzOiB0cnVlIH0pXG4vLyAgICAgfVxuLy8gfSk7XG5cbi8vIGNvbnN0IHVzZXIxID0gbmV3IFVzZXIoJ0phbmUnLCAnRGF3JywgJ0phbmVARGF3JywgJzEyLjEwLjE5ODknLCAnREREREREJyk7XG4vLyBjb25zb2xlLmxvZyhg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMICR7SlNPTi5zdHJpbmdpZnkodXNlcjEpfWApO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMCwgYm9va3MpO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMSwgYm9va3MpO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMCwgYm9va3MpO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMywgYm9va3MpO1xuLy8gdXNlcjEuYWRkVG9DYXJ0KDEwMiwgYm9va3MpO1xuLy8gdXNlcjEucmVtb3ZlRnJvbUNhcnQoMTAzKTtcbi8vIHVzZXIxLnJlbW92ZUZyb21DYXJ0KDEwMik7XG4vLyB1c2VyMS5yZW1vdmVGcm9tQ2FydCgxMDUpO1xuLy8gdXNlcjEucmVtb3ZlRnJvbUNhcnQoMTAwKTtcbi8vIHVzZXIxLnJlbW92ZUZyb21DYXJ0KDEwMCk7XG4vLyB1c2VyMS5yZW1vdmVGcm9tQ2FydCgxMDApO1xuXG5cbi8vIGNvbnNvbGUubG9nKGDQodGD0LzQvNCwICR7dXNlcjEuY291bnRUb3RhbCgpfWApO1xuLy8gY29uc29sZS5sb2coYNCa0L7RgNC30LjQvdCwICR7SlNPTi5zdHJpbmdpZnkodXNlcjEuY2FydCl9YCk7XG5cbi8vIGNvbnNvbGUubG9nKGJvb2tzLCBwcm9kdWN0cyk7XG5cblxuIl19