"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Book = void 0;
var product_js_1 = require("./product.js");
//Задание 2 
var Type;
(function (Type) {
    Type[Type["New"] = 0] = "New";
    Type[Type["Old"] = 1] = "Old";
})(Type || (Type = {}));
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(name, genre, cover, id, price, author) {
        var _this = _super.call(this, name, cover, id, Type.New, price) || this;
        _this.genre = genre,
            _this.author = author;
        return _this;
    }
    Book.prototype.showData = function () {
        console.log("\u0422\u043E\u0432\u0430\u0440 - ".concat(this.name, ", \u0446\u0435\u043D\u0430 - ").concat(this.getPrice(), " - \u0442\u0438\u043F \u043E\u0431\u043B\u043E\u0436\u043A\u0438 ").concat(this.cover, ",\u0436\u0430\u043D\u0440 - ").concat(this.genre, ", \u0430\u0432\u0442\u043E\u0440 - ").concat(this.getAuthor()));
    };
    Book.prototype.getAuthor = function () {
        return this.author ? this.author.name + ' ' + this.author.surname : 'Автор не указан';
    };
    Book.prototype.getInfo = function () {
        console.log(this.name, this.price);
    };
    return Book;
}(product_js_1.Product));
exports.Book = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBSXRDLFlBQVk7QUFDWixJQUFLLElBR0o7QUFIRCxXQUFLLElBQUk7SUFDUCw2QkFBRyxDQUFBO0lBQ0gsNkJBQUcsQ0FBQTtBQUNMLENBQUMsRUFISSxJQUFJLEtBQUosSUFBSSxRQUdSO0FBRUQ7SUFBMEIsd0JBQWE7SUFLckMsY0FBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLEtBQVksRUFBRSxFQUFVLEVBQUUsS0FBYyxFQUFFLE1BQWdCO1FBQW5HLFlBQ0Usa0JBQU0sSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUUsU0FHekM7UUFGQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7WUFDaEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7O0lBQ3hCLENBQUM7SUFDRCx1QkFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBVyxJQUFJLENBQUMsSUFBSSwwQ0FBWSxJQUFJLENBQUMsUUFBUSxFQUFFLDhFQUFrQixJQUFJLENBQUMsS0FBSyx5Q0FBVyxJQUFJLENBQUMsS0FBSyxnREFBYSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUUsQ0FBQyxDQUFBO0lBQzlJLENBQUM7SUFDRCx3QkFBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFBO0lBQ3ZGLENBQUM7SUFDRCxzQkFBTyxHQUFQO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUFwQkQsQ0FBMEIsb0JBQU8sR0FvQmhDO0FBcEJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbmltcG9ydCB7IElBdXRob3IgfSBmcm9tICcuL3R5cGVzL2F1dGhvci5qcydcbmltcG9ydCB7IENvdmVyIH0gZnJvbSAnLi90eXBlcy9jb3Zlci5qcydcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4vdHlwZXMvcmV2aWV3SS5qcyc7XG4vL9CX0LDQtNCw0L3QuNC1IDIgXG5lbnVtIFR5cGUge1xuICBOZXcsXG4gIE9sZFxufVxuXG5leHBvcnQgY2xhc3MgQm9vayBleHRlbmRzIFByb2R1Y3Q8VHlwZT4ge1xuICBnZW5yZTogc3RyaW5nXG4gIGF1dGhvcj86IElBdXRob3I7XG5cblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGdlbnJlOiBzdHJpbmcsIGNvdmVyOiBDb3ZlciwgaWQ6IG51bWJlciwgcHJpY2U/OiBudW1iZXIsIGF1dGhvcj86IElBdXRob3IsKSB7XG4gICAgc3VwZXIobmFtZSwgY292ZXIsIGlkLCBUeXBlLk5ldywgcHJpY2UsKVxuICAgIHRoaXMuZ2VucmUgPSBnZW5yZSxcbiAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yXG4gIH1cbiAgc2hvd0RhdGEoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYNCi0L7QstCw0YAgLSAke3RoaXMubmFtZX0sINGG0LXQvdCwIC0gJHt0aGlzLmdldFByaWNlKCl9IC0g0YLQuNC/INC+0LHQu9C+0LbQutC4ICR7dGhpcy5jb3Zlcn0s0LbQsNC90YAgLSAke3RoaXMuZ2VucmV9LCDQsNCy0YLQvtGAIC0gJHt0aGlzLmdldEF1dGhvcigpfWApXG4gIH1cbiAgZ2V0QXV0aG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yID8gdGhpcy5hdXRob3IubmFtZSArICcgJyArIHRoaXMuYXV0aG9yLnN1cm5hbWUgOiAn0JDQstGC0L7RgCDQvdC1INGD0LrQsNC30LDQvSdcbiAgfVxuICBnZXRJbmZvKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgdGhpcy5wcmljZSk7XG4gIH1cblxufVxuIl19