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
exports.Notepad = void 0;
var product_js_1 = require("./product.js");
//Задание 2 
var Type;
(function (Type) {
    Type[Type["Plain"] = 0] = "Plain";
    Type[Type["Graph"] = 1] = "Graph";
})(Type || (Type = {}));
var Notepad = /** @class */ (function (_super) {
    __extends(Notepad, _super);
    function Notepad(name, cover, id, price) {
        return _super.call(this, name, cover, id, Type.Graph, price) || this;
    }
    Notepad.prototype.canBuy = function () {
        return typeof this.price === 'number';
    };
    Notepad.prototype.showData = function () {
        _super.prototype.showData.call(this);
    };
    return Notepad;
}(product_js_1.Product));
exports.Notepad = Notepad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGVwYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXVDO0FBRXZDLFlBQVk7QUFFWixJQUFLLElBR0o7QUFIRCxXQUFLLElBQUk7SUFDTCxpQ0FBSyxDQUFBO0lBQ0wsaUNBQUssQ0FBQTtBQUNULENBQUMsRUFISSxJQUFJLEtBQUosSUFBSSxRQUdSO0FBRUQ7SUFBNkIsMkJBQWE7SUFNdEMsaUJBQVksSUFBWSxFQUFFLEtBQVksRUFBRSxFQUFVLEVBQUUsS0FBYztlQUM5RCxrQkFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNJLE9BQU8sT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQTtJQUN6QyxDQUFDO0lBQ0QsMEJBQVEsR0FBUjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUE2QixvQkFBTyxHQWdCbkM7QUFoQlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vcHJvZHVjdC5qc1wiO1xuaW1wb3J0IHsgQ292ZXIgfSBmcm9tICcuL3R5cGVzL2NvdmVyLmpzJ1xuLy/Ql9Cw0LTQsNC90LjQtSAyIFxuXG5lbnVtIFR5cGUge1xuICAgIFBsYWluLFxuICAgIEdyYXBoXG59XG5cbmV4cG9ydCBjbGFzcyBOb3RlcGFkIGV4dGVuZHMgUHJvZHVjdDxUeXBlPiB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgY292ZXI6IENvdmVyXG4gICAgcHJpY2U/OiBudW1iZXJcblxuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb3ZlcjogQ292ZXIsIGlkOiBudW1iZXIsIHByaWNlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGNvdmVyLCBpZCwgVHlwZS5HcmFwaCwgcHJpY2UpO1xuICAgIH1cblxuICAgIGNhbkJ1eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByaWNlID09PSAnbnVtYmVyJ1xuICAgIH1cbiAgICBzaG93RGF0YSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuc2hvd0RhdGEoKTtcbiAgICB9XG59Il19