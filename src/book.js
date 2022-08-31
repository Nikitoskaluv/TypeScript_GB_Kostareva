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
    return Book;
}(product_js_1.Product));
exports.Book = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBR3RDLFlBQVk7QUFDWixJQUFLLElBR0o7QUFIRCxXQUFLLElBQUk7SUFDUCw2QkFBRyxDQUFBO0lBQ0gsNkJBQUcsQ0FBQTtBQUNMLENBQUMsRUFISSxJQUFJLEtBQUosSUFBSSxRQUdSO0FBRUQ7SUFBMEIsd0JBQWE7SUFXckMsY0FBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLEtBQVksRUFBRSxFQUFVLEVBQUUsS0FBYyxFQUFFLE1BQWdCO1FBQW5HLFlBQ0Usa0JBQU0sSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsU0FHeEM7UUFGQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7WUFDaEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7O0lBQ3hCLENBQUM7SUFDRCx1QkFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBVyxJQUFJLENBQUMsSUFBSSwwQ0FBWSxJQUFJLENBQUMsUUFBUSxFQUFFLDhFQUFrQixJQUFJLENBQUMsS0FBSyx5Q0FBVyxJQUFJLENBQUMsS0FBSyxnREFBYSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUUsQ0FBQyxDQUFBO0lBQzlJLENBQUM7SUFDRCx3QkFBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFBO0lBQ3ZGLENBQUM7SUFFSCxXQUFDO0FBQUQsQ0FBQyxBQXZCRCxDQUEwQixvQkFBTyxHQXVCaEM7QUF2Qlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuaW1wb3J0IHsgSUF1dGhvciB9IGZyb20gJy4vdHlwZXMvYXV0aG9yLmpzJ1xuaW1wb3J0IHsgQ292ZXIgfSBmcm9tICcuL3R5cGVzL2NvdmVyLmpzJ1xuLy/Ql9Cw0LTQsNC90LjQtSAyIFxuZW51bSBUeXBlIHtcbiAgTmV3LFxuICBPbGRcbn1cblxuZXhwb3J0IGNsYXNzIEJvb2sgZXh0ZW5kcyBQcm9kdWN0PFR5cGU+IHtcbiAgbmFtZTogc3RyaW5nXG4gIGdlbnJlOiBzdHJpbmdcbiAgY292ZXI6IENvdmVyXG4gIGlkOiBudW1iZXJcbiAgcHJpY2U/OiBudW1iZXJcbiAgYXV0aG9yPzogSUF1dGhvcjtcblxuXG5cblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGdlbnJlOiBzdHJpbmcsIGNvdmVyOiBDb3ZlciwgaWQ6IG51bWJlciwgcHJpY2U/OiBudW1iZXIsIGF1dGhvcj86IElBdXRob3IpIHtcbiAgICBzdXBlcihuYW1lLCBjb3ZlciwgaWQsIFR5cGUuTmV3LCBwcmljZSk7XG4gICAgdGhpcy5nZW5yZSA9IGdlbnJlLFxuICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3JcbiAgfVxuICBzaG93RGF0YSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhg0KLQvtCy0LDRgCAtICR7dGhpcy5uYW1lfSwg0YbQtdC90LAgLSAke3RoaXMuZ2V0UHJpY2UoKX0gLSDRgtC40L8g0L7QsdC70L7QttC60LggJHt0aGlzLmNvdmVyfSzQttCw0L3RgCAtICR7dGhpcy5nZW5yZX0sINCw0LLRgtC+0YAgLSAke3RoaXMuZ2V0QXV0aG9yKCl9YClcbiAgfVxuICBnZXRBdXRob3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hdXRob3IgPyB0aGlzLmF1dGhvci5uYW1lICsgJyAnICsgdGhpcy5hdXRob3Iuc3VybmFtZSA6ICfQkNCy0YLQvtGAINC90LUg0YPQutCw0LfQsNC9J1xuICB9XG5cbn1cbiJdfQ==