"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.books = void 0;
const book_js_1 = require("./book.js");
const notepad_js_1 = require("./notepad.js");
const album_js_1 = require("./album.js");
exports.books = [
    new book_js_1.Book('Harry Potter and the Philosopher\'s Stone', 'fantasy', 'hard', 100, 980),
    new book_js_1.Book('Lord of the Ring', 'fantasy', 'hard', 101, 1001),
    new book_js_1.Book('How to be productive', 'lifestyle', 'hard', 102, 500),
    new book_js_1.Book('Game of Thrones', 'fantasy', 'soft', 103),
    new book_js_1.Book('Eat,pray,love', 'romance', 'soft', 104, 1500, { name: 'Elizabeth', surname: 'Gilbert' }),
];
exports.products = [new notepad_js_1.Notepad('Notepad one', 'hard', 104, 777),
    new notepad_js_1.Notepad('Notepad two', 'soft', 105),
    new album_js_1.Album(15, 20, 'hard', 106, 300)];
// export const map = new MyMap<number, Product>();
// map.set(1, new Book('Lord of the Ring', 'fantasy', 'hard', 1001));
// map.set(2, new Notepad('Notepad one', 'hard', 777));
//Задание 4 метод setAll 
// const arayOfProducts = [{ 1: new Book('Harry Potter and the Philosopher\'s Stone', 'fantasy', 'hard', 980) },
// { 2: new Book('Lord of the Ring', 'fantasy', 'hard', 1001) },
// { 3: new Book('How to be productive', 'lifestyle', 'hard', 500) },
// { 4: new Book('Game of Thrones', 'fantasy', 'soft') },
// { 5: new Book('Eat,pray,love', 'romance', 'soft', 1500, { name: 'Elizabeth', surname: 'Gilbert' }) },
// { 6: new Notepad('Notepad one', 'hard', 777) },
// { 7: new Notepad('Notepad two', 'soft') },
// { 9: new Album(15, 20, 'hard', 300) }
// ];
// map.setAll(arayOfProducts);
// export const catalogue = map.getAll();
// console.log(`Товары ${JSON.stringify(map.getAll())}`);
//Проверка методов класса MyMap с урока 
// console.log(`Два товара ${JSON.stringify(map.getAll())}`);
// console.log(`Есть такой тоавр ${map.has(3)}`);
// console.log(`Получить такой тоавр ${map.get(3)}`);
// console.log(`Есть такой товар ${map.has(3)}`);
// console.log(`Удалить такой тоавр ${map.remove(1)}`);
// console.log(`Один товар ${JSON.stringify(map.getAll())}`);
// map.set(1, new Book('How to be productive', 'lifestyle', 'hard', 500));
// console.log(`Два товара ${JSON.stringify(map.getAll())}`);
// map.clear();
// console.log(`Нет товаров ${JSON.stringify(map.getAll())}`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Byb2R1Y3QtY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBZ0M7QUFDaEMsNkNBQXNDO0FBQ3RDLHlDQUFrQztBQUlyQixRQUFBLEtBQUssR0FBRztJQUNuQixJQUFJLGNBQUksQ0FBQywyQ0FBMkMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDbEYsSUFBSSxjQUFJLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQzFELElBQUksY0FBSSxDQUFDLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMvRCxJQUFJLGNBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUNuRCxJQUFJLGNBQUksQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Q0FDbkcsQ0FBQTtBQUVZLFFBQUEsUUFBUSxHQUFHLENBQUMsSUFBSSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNyRSxJQUFJLG9CQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDdkMsSUFBSSxnQkFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBSXBDLG1EQUFtRDtBQUVuRCxxRUFBcUU7QUFDckUsdURBQXVEO0FBSXZELHlCQUF5QjtBQUN6QixnSEFBZ0g7QUFDaEgsZ0VBQWdFO0FBQ2hFLHFFQUFxRTtBQUNyRSx5REFBeUQ7QUFDekQsd0dBQXdHO0FBQ3hHLGtEQUFrRDtBQUNsRCw2Q0FBNkM7QUFDN0Msd0NBQXdDO0FBQ3hDLEtBQUs7QUFFTCw4QkFBOEI7QUFDOUIseUNBQXlDO0FBQ3pDLHlEQUF5RDtBQUV6RCx3Q0FBd0M7QUFDeEMsNkRBQTZEO0FBQzdELGlEQUFpRDtBQUNqRCxxREFBcUQ7QUFDckQsaURBQWlEO0FBQ2pELHVEQUF1RDtBQUN2RCw2REFBNkQ7QUFDN0QsMEVBQTBFO0FBQzFFLDZEQUE2RDtBQUM3RCxlQUFlO0FBQ2YsOERBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vayB9IGZyb20gJy4vYm9vay5qcydcbmltcG9ydCB7IE5vdGVwYWQgfSBmcm9tICcuL25vdGVwYWQuanMnXG5pbXBvcnQgeyBBbGJ1bSB9IGZyb20gJy4vYWxidW0uanMnXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuaW1wb3J0IHsgTXlNYXAgfSBmcm9tICcuL2NvbW1vbi9NeU1hcC5qcydcblxuZXhwb3J0IGNvbnN0IGJvb2tzID0gW1xuICBuZXcgQm9vaygnSGFycnkgUG90dGVyIGFuZCB0aGUgUGhpbG9zb3BoZXJcXCdzIFN0b25lJywgJ2ZhbnRhc3knLCAnaGFyZCcsIDEwMCwgOTgwKSxcbiAgbmV3IEJvb2soJ0xvcmQgb2YgdGhlIFJpbmcnLCAnZmFudGFzeScsICdoYXJkJywgMTAxLCAxMDAxKSxcbiAgbmV3IEJvb2soJ0hvdyB0byBiZSBwcm9kdWN0aXZlJywgJ2xpZmVzdHlsZScsICdoYXJkJywgMTAyLCA1MDApLFxuICBuZXcgQm9vaygnR2FtZSBvZiBUaHJvbmVzJywgJ2ZhbnRhc3knLCAnc29mdCcsIDEwMyksXG4gIG5ldyBCb29rKCdFYXQscHJheSxsb3ZlJywgJ3JvbWFuY2UnLCAnc29mdCcsIDEwNCwgMTUwMCwgeyBuYW1lOiAnRWxpemFiZXRoJywgc3VybmFtZTogJ0dpbGJlcnQnIH0pLFxuXVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdHMgPSBbbmV3IE5vdGVwYWQoJ05vdGVwYWQgb25lJywgJ2hhcmQnLCAxMDQsIDc3NyksXG5uZXcgTm90ZXBhZCgnTm90ZXBhZCB0d28nLCAnc29mdCcsIDEwNSksXG5uZXcgQWxidW0oMTUsIDIwLCAnaGFyZCcsIDEwNiwgMzAwKV1cblxuXG5cbi8vIGV4cG9ydCBjb25zdCBtYXAgPSBuZXcgTXlNYXA8bnVtYmVyLCBQcm9kdWN0PigpO1xuXG4vLyBtYXAuc2V0KDEsIG5ldyBCb29rKCdMb3JkIG9mIHRoZSBSaW5nJywgJ2ZhbnRhc3knLCAnaGFyZCcsIDEwMDEpKTtcbi8vIG1hcC5zZXQoMiwgbmV3IE5vdGVwYWQoJ05vdGVwYWQgb25lJywgJ2hhcmQnLCA3NzcpKTtcblxuXG5cbi8v0JfQsNC00LDQvdC40LUgNCDQvNC10YLQvtC0IHNldEFsbCBcbi8vIGNvbnN0IGFyYXlPZlByb2R1Y3RzID0gW3sgMTogbmV3IEJvb2soJ0hhcnJ5IFBvdHRlciBhbmQgdGhlIFBoaWxvc29waGVyXFwncyBTdG9uZScsICdmYW50YXN5JywgJ2hhcmQnLCA5ODApIH0sXG4vLyB7IDI6IG5ldyBCb29rKCdMb3JkIG9mIHRoZSBSaW5nJywgJ2ZhbnRhc3knLCAnaGFyZCcsIDEwMDEpIH0sXG4vLyB7IDM6IG5ldyBCb29rKCdIb3cgdG8gYmUgcHJvZHVjdGl2ZScsICdsaWZlc3R5bGUnLCAnaGFyZCcsIDUwMCkgfSxcbi8vIHsgNDogbmV3IEJvb2soJ0dhbWUgb2YgVGhyb25lcycsICdmYW50YXN5JywgJ3NvZnQnKSB9LFxuLy8geyA1OiBuZXcgQm9vaygnRWF0LHByYXksbG92ZScsICdyb21hbmNlJywgJ3NvZnQnLCAxNTAwLCB7IG5hbWU6ICdFbGl6YWJldGgnLCBzdXJuYW1lOiAnR2lsYmVydCcgfSkgfSxcbi8vIHsgNjogbmV3IE5vdGVwYWQoJ05vdGVwYWQgb25lJywgJ2hhcmQnLCA3NzcpIH0sXG4vLyB7IDc6IG5ldyBOb3RlcGFkKCdOb3RlcGFkIHR3bycsICdzb2Z0JykgfSxcbi8vIHsgOTogbmV3IEFsYnVtKDE1LCAyMCwgJ2hhcmQnLCAzMDApIH1cbi8vIF07XG5cbi8vIG1hcC5zZXRBbGwoYXJheU9mUHJvZHVjdHMpO1xuLy8gZXhwb3J0IGNvbnN0IGNhdGFsb2d1ZSA9IG1hcC5nZXRBbGwoKTtcbi8vIGNvbnNvbGUubG9nKGDQotC+0LLQsNGA0YsgJHtKU09OLnN0cmluZ2lmeShtYXAuZ2V0QWxsKCkpfWApO1xuXG4vL9Cf0YDQvtCy0LXRgNC60LAg0LzQtdGC0L7QtNC+0LIg0LrQu9Cw0YHRgdCwIE15TWFwINGBINGD0YDQvtC60LAgXG4vLyBjb25zb2xlLmxvZyhg0JTQstCwINGC0L7QstCw0YDQsCAke0pTT04uc3RyaW5naWZ5KG1hcC5nZXRBbGwoKSl9YCk7XG4vLyBjb25zb2xlLmxvZyhg0JXRgdGC0Ywg0YLQsNC60L7QuSDRgtC+0LDQstGAICR7bWFwLmhhcygzKX1gKTtcbi8vIGNvbnNvbGUubG9nKGDQn9C+0LvRg9GH0LjRgtGMINGC0LDQutC+0Lkg0YLQvtCw0LLRgCAke21hcC5nZXQoMyl9YCk7XG4vLyBjb25zb2xlLmxvZyhg0JXRgdGC0Ywg0YLQsNC60L7QuSDRgtC+0LLQsNGAICR7bWFwLmhhcygzKX1gKTtcbi8vIGNvbnNvbGUubG9nKGDQo9C00LDQu9C40YLRjCDRgtCw0LrQvtC5INGC0L7QsNCy0YAgJHttYXAucmVtb3ZlKDEpfWApO1xuLy8gY29uc29sZS5sb2coYNCe0LTQuNC9INGC0L7QstCw0YAgJHtKU09OLnN0cmluZ2lmeShtYXAuZ2V0QWxsKCkpfWApO1xuLy8gbWFwLnNldCgxLCBuZXcgQm9vaygnSG93IHRvIGJlIHByb2R1Y3RpdmUnLCAnbGlmZXN0eWxlJywgJ2hhcmQnLCA1MDApKTtcbi8vIGNvbnNvbGUubG9nKGDQlNCy0LAg0YLQvtCy0LDRgNCwICR7SlNPTi5zdHJpbmdpZnkobWFwLmdldEFsbCgpKX1gKTtcbi8vIG1hcC5jbGVhcigpO1xuLy8gY29uc29sZS5sb2coYNCd0LXRgiDRgtC+0LLQsNGA0L7QsiAke0pTT04uc3RyaW5naWZ5KG1hcC5nZXRBbGwoKSl9YCk7XG5cblxuXG4iXX0=