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
    function Book(name, genre, cover, price, author) {
        var _this = _super.call(this, name, cover, Type.New, price) || this;
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
    return Book;
}(product_js_1.Product));
exports.Book = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBR3RDLFlBQVk7QUFDWixJQUFLLElBR0o7QUFIRCxXQUFLLElBQUk7SUFDUCw2QkFBRyxDQUFBO0lBQ0gsNkJBQUcsQ0FBQTtBQUNMLENBQUMsRUFISSxJQUFJLEtBQUosSUFBSSxRQUdSO0FBRUQ7SUFBMEIsd0JBQWE7SUFVckMsY0FBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLEtBQVksRUFBRSxLQUFjLEVBQUUsTUFBZ0I7UUFBdkYsWUFDRSxrQkFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBR3BDO1FBRkMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1lBQ2hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBOztJQUN4QixDQUFDO0lBQ0QsdUJBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQVcsSUFBSSxDQUFDLElBQUksMENBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSw4RUFBa0IsSUFBSSxDQUFDLEtBQUsseUNBQVcsSUFBSSxDQUFDLEtBQUssZ0RBQWEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFFLENBQUMsQ0FBQTtJQUM5SSxDQUFDO0lBQ0Qsd0JBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQTtJQUN2RixDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUF0QkQsQ0FBMEIsb0JBQU8sR0FzQmhDO0FBdEJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbmltcG9ydCB7IElBdXRob3IgfSBmcm9tICcuL3R5cGVzL2F1dGhvci5qcydcbmltcG9ydCB7IENvdmVyIH0gZnJvbSAnLi90eXBlcy9jb3Zlci5qcydcbi8v0JfQsNC00LDQvdC40LUgMiBcbmVudW0gVHlwZSB7XG4gIE5ldyxcbiAgT2xkXG59XG5cbmV4cG9ydCBjbGFzcyBCb29rIGV4dGVuZHMgUHJvZHVjdDxUeXBlPiB7XG4gIG5hbWU6IHN0cmluZ1xuICBnZW5yZTogc3RyaW5nXG4gIGNvdmVyOiBDb3ZlclxuICBwcmljZT86IG51bWJlclxuICBhdXRob3I/OiBJQXV0aG9yO1xuXG5cblxuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZ2VucmU6IHN0cmluZywgY292ZXI6IENvdmVyLCBwcmljZT86IG51bWJlciwgYXV0aG9yPzogSUF1dGhvcikge1xuICAgIHN1cGVyKG5hbWUsIGNvdmVyLCBUeXBlLk5ldywgcHJpY2UpO1xuICAgIHRoaXMuZ2VucmUgPSBnZW5yZSxcbiAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yXG4gIH1cbiAgc2hvd0RhdGEoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYNCi0L7QstCw0YAgLSAke3RoaXMubmFtZX0sINGG0LXQvdCwIC0gJHt0aGlzLmdldFByaWNlKCl9IC0g0YLQuNC/INC+0LHQu9C+0LbQutC4ICR7dGhpcy5jb3Zlcn0s0LbQsNC90YAgLSAke3RoaXMuZ2VucmV9LCDQsNCy0YLQvtGAIC0gJHt0aGlzLmdldEF1dGhvcigpfWApXG4gIH1cbiAgZ2V0QXV0aG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yID8gdGhpcy5hdXRob3IubmFtZSArICcgJyArIHRoaXMuYXV0aG9yLnN1cm5hbWUgOiAn0JDQstGC0L7RgCDQvdC1INGD0LrQsNC30LDQvSdcbiAgfVxuXG59XG4iXX0=