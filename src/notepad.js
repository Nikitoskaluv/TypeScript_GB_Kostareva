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
    function Notepad(name, cover, price) {
        return _super.call(this, name, cover, Type.Graph, price) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGVwYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXVDO0FBRXZDLFlBQVk7QUFFWixJQUFLLElBR0o7QUFIRCxXQUFLLElBQUk7SUFDTCxpQ0FBSyxDQUFBO0lBQ0wsaUNBQUssQ0FBQTtBQUNULENBQUMsRUFISSxJQUFJLEtBQUosSUFBSSxRQUdSO0FBRUQ7SUFBNkIsMkJBQWE7SUFNdEMsaUJBQVksSUFBWSxFQUFFLEtBQVksRUFBRSxLQUFjO2VBQ2xELGtCQUFNLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUVELHdCQUFNLEdBQU47UUFDSSxPQUFPLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUE7SUFDekMsQ0FBQztJQUNELDBCQUFRLEdBQVI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFoQkQsQ0FBNkIsb0JBQU8sR0FnQm5DO0FBaEJZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuL3Byb2R1Y3QuanNcIjtcbmltcG9ydCB7IENvdmVyIH0gZnJvbSAnLi90eXBlcy9jb3Zlci5qcydcbi8v0JfQsNC00LDQvdC40LUgMiBcblxuZW51bSBUeXBlIHtcbiAgICBQbGFpbixcbiAgICBHcmFwaFxufVxuXG5leHBvcnQgY2xhc3MgTm90ZXBhZCBleHRlbmRzIFByb2R1Y3Q8VHlwZT4ge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvdmVyOiBDb3ZlclxuICAgIHByaWNlPzogbnVtYmVyXG5cblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY292ZXI6IENvdmVyLCBwcmljZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcihuYW1lLCBjb3ZlciwgVHlwZS5HcmFwaCwgcHJpY2UpO1xuICAgIH1cblxuICAgIGNhbkJ1eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByaWNlID09PSAnbnVtYmVyJ1xuICAgIH1cbiAgICBzaG93RGF0YSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuc2hvd0RhdGEoKTtcbiAgICB9XG59Il19