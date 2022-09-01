import { Book } from './book.js';
import { Notepad } from './notepad.js';
import { Album } from './album.js';
export const books = [
    new Book('Harry Potter and the Philosopher\'s Stone', 'fantasy', 'hard', 100, 980),
    new Book('Lord of the Ring', 'fantasy', 'hard', 101, 1001),
    new Book('How to be productive', 'lifestyle', 'hard', 102, 500),
    new Book('Game of Thrones', 'fantasy', 'soft', 103),
    new Book('Eat,pray,love', 'romance', 'soft', 104, 1500, { name: 'Elizabeth', surname: 'Gilbert' }),
];
export const products = [new Notepad('Notepad one', 'hard', 104, 777),
    new Notepad('Notepad two', 'soft', 105),
    new Album(15, 20, 'hard', 106, 300)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Byb2R1Y3QtY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBQ2hDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQTtBQUlsQyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUc7SUFDbkIsSUFBSSxJQUFJLENBQUMsMkNBQTJDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2xGLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztJQUMxRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDL0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDbkQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO0NBQ25HLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDckUsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDdkMsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFJcEMsbURBQW1EO0FBRW5ELHFFQUFxRTtBQUNyRSx1REFBdUQ7QUFJdkQseUJBQXlCO0FBQ3pCLGdIQUFnSDtBQUNoSCxnRUFBZ0U7QUFDaEUscUVBQXFFO0FBQ3JFLHlEQUF5RDtBQUN6RCx3R0FBd0c7QUFDeEcsa0RBQWtEO0FBQ2xELDZDQUE2QztBQUM3Qyx3Q0FBd0M7QUFDeEMsS0FBSztBQUVMLDhCQUE4QjtBQUM5Qix5Q0FBeUM7QUFDekMseURBQXlEO0FBRXpELHdDQUF3QztBQUN4Qyw2REFBNkQ7QUFDN0QsaURBQWlEO0FBQ2pELHFEQUFxRDtBQUNyRCxpREFBaUQ7QUFDakQsdURBQXVEO0FBQ3ZELDZEQUE2RDtBQUM3RCwwRUFBMEU7QUFDMUUsNkRBQTZEO0FBQzdELGVBQWU7QUFDZiw4REFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJ1xuaW1wb3J0IHsgTm90ZXBhZCB9IGZyb20gJy4vbm90ZXBhZC5qcydcbmltcG9ydCB7IEFsYnVtIH0gZnJvbSAnLi9hbGJ1bS5qcydcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG5pbXBvcnQgeyBNeU1hcCB9IGZyb20gJy4vY29tbW9uL015TWFwLmpzJ1xuXG5leHBvcnQgY29uc3QgYm9va3MgPSBbXG4gIG5ldyBCb29rKCdIYXJyeSBQb3R0ZXIgYW5kIHRoZSBQaGlsb3NvcGhlclxcJ3MgU3RvbmUnLCAnZmFudGFzeScsICdoYXJkJywgMTAwLCA5ODApLFxuICBuZXcgQm9vaygnTG9yZCBvZiB0aGUgUmluZycsICdmYW50YXN5JywgJ2hhcmQnLCAxMDEsIDEwMDEpLFxuICBuZXcgQm9vaygnSG93IHRvIGJlIHByb2R1Y3RpdmUnLCAnbGlmZXN0eWxlJywgJ2hhcmQnLCAxMDIsIDUwMCksXG4gIG5ldyBCb29rKCdHYW1lIG9mIFRocm9uZXMnLCAnZmFudGFzeScsICdzb2Z0JywgMTAzKSxcbiAgbmV3IEJvb2soJ0VhdCxwcmF5LGxvdmUnLCAncm9tYW5jZScsICdzb2Z0JywgMTA0LCAxNTAwLCB7IG5hbWU6ICdFbGl6YWJldGgnLCBzdXJuYW1lOiAnR2lsYmVydCcgfSksXG5dXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0cyA9IFtuZXcgTm90ZXBhZCgnTm90ZXBhZCBvbmUnLCAnaGFyZCcsIDEwNCwgNzc3KSxcbm5ldyBOb3RlcGFkKCdOb3RlcGFkIHR3bycsICdzb2Z0JywgMTA1KSxcbm5ldyBBbGJ1bSgxNSwgMjAsICdoYXJkJywgMTA2LCAzMDApXVxuXG5cblxuLy8gZXhwb3J0IGNvbnN0IG1hcCA9IG5ldyBNeU1hcDxudW1iZXIsIFByb2R1Y3Q+KCk7XG5cbi8vIG1hcC5zZXQoMSwgbmV3IEJvb2soJ0xvcmQgb2YgdGhlIFJpbmcnLCAnZmFudGFzeScsICdoYXJkJywgMTAwMSkpO1xuLy8gbWFwLnNldCgyLCBuZXcgTm90ZXBhZCgnTm90ZXBhZCBvbmUnLCAnaGFyZCcsIDc3NykpO1xuXG5cblxuLy/Ql9Cw0LTQsNC90LjQtSA0INC80LXRgtC+0LQgc2V0QWxsIFxuLy8gY29uc3QgYXJheU9mUHJvZHVjdHMgPSBbeyAxOiBuZXcgQm9vaygnSGFycnkgUG90dGVyIGFuZCB0aGUgUGhpbG9zb3BoZXJcXCdzIFN0b25lJywgJ2ZhbnRhc3knLCAnaGFyZCcsIDk4MCkgfSxcbi8vIHsgMjogbmV3IEJvb2soJ0xvcmQgb2YgdGhlIFJpbmcnLCAnZmFudGFzeScsICdoYXJkJywgMTAwMSkgfSxcbi8vIHsgMzogbmV3IEJvb2soJ0hvdyB0byBiZSBwcm9kdWN0aXZlJywgJ2xpZmVzdHlsZScsICdoYXJkJywgNTAwKSB9LFxuLy8geyA0OiBuZXcgQm9vaygnR2FtZSBvZiBUaHJvbmVzJywgJ2ZhbnRhc3knLCAnc29mdCcpIH0sXG4vLyB7IDU6IG5ldyBCb29rKCdFYXQscHJheSxsb3ZlJywgJ3JvbWFuY2UnLCAnc29mdCcsIDE1MDAsIHsgbmFtZTogJ0VsaXphYmV0aCcsIHN1cm5hbWU6ICdHaWxiZXJ0JyB9KSB9LFxuLy8geyA2OiBuZXcgTm90ZXBhZCgnTm90ZXBhZCBvbmUnLCAnaGFyZCcsIDc3NykgfSxcbi8vIHsgNzogbmV3IE5vdGVwYWQoJ05vdGVwYWQgdHdvJywgJ3NvZnQnKSB9LFxuLy8geyA5OiBuZXcgQWxidW0oMTUsIDIwLCAnaGFyZCcsIDMwMCkgfVxuLy8gXTtcblxuLy8gbWFwLnNldEFsbChhcmF5T2ZQcm9kdWN0cyk7XG4vLyBleHBvcnQgY29uc3QgY2F0YWxvZ3VlID0gbWFwLmdldEFsbCgpO1xuLy8gY29uc29sZS5sb2coYNCi0L7QstCw0YDRiyAke0pTT04uc3RyaW5naWZ5KG1hcC5nZXRBbGwoKSl9YCk7XG5cbi8v0J/RgNC+0LLQtdGA0LrQsCDQvNC10YLQvtC00L7QsiDQutC70LDRgdGB0LAgTXlNYXAg0YEg0YPRgNC+0LrQsCBcbi8vIGNvbnNvbGUubG9nKGDQlNCy0LAg0YLQvtCy0LDRgNCwICR7SlNPTi5zdHJpbmdpZnkobWFwLmdldEFsbCgpKX1gKTtcbi8vIGNvbnNvbGUubG9nKGDQldGB0YLRjCDRgtCw0LrQvtC5INGC0L7QsNCy0YAgJHttYXAuaGFzKDMpfWApO1xuLy8gY29uc29sZS5sb2coYNCf0L7Qu9GD0YfQuNGC0Ywg0YLQsNC60L7QuSDRgtC+0LDQstGAICR7bWFwLmdldCgzKX1gKTtcbi8vIGNvbnNvbGUubG9nKGDQldGB0YLRjCDRgtCw0LrQvtC5INGC0L7QstCw0YAgJHttYXAuaGFzKDMpfWApO1xuLy8gY29uc29sZS5sb2coYNCj0LTQsNC70LjRgtGMINGC0LDQutC+0Lkg0YLQvtCw0LLRgCAke21hcC5yZW1vdmUoMSl9YCk7XG4vLyBjb25zb2xlLmxvZyhg0J7QtNC40L0g0YLQvtCy0LDRgCAke0pTT04uc3RyaW5naWZ5KG1hcC5nZXRBbGwoKSl9YCk7XG4vLyBtYXAuc2V0KDEsIG5ldyBCb29rKCdIb3cgdG8gYmUgcHJvZHVjdGl2ZScsICdsaWZlc3R5bGUnLCAnaGFyZCcsIDUwMCkpO1xuLy8gY29uc29sZS5sb2coYNCU0LLQsCDRgtC+0LLQsNGA0LAgJHtKU09OLnN0cmluZ2lmeShtYXAuZ2V0QWxsKCkpfWApO1xuLy8gbWFwLmNsZWFyKCk7XG4vLyBjb25zb2xlLmxvZyhg0J3QtdGCINGC0L7QstCw0YDQvtCyICR7SlNPTi5zdHJpbmdpZnkobWFwLmdldEFsbCgpKX1gKTtcblxuXG5cbiJdfQ==