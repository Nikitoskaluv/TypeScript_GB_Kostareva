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
exports.Album = void 0;
var product_js_1 = require("./product.js");
//Задание 2 
var Type;
(function (Type) {
    Type[Type["Plain"] = 0] = "Plain";
    Type[Type["Graph"] = 1] = "Graph";
})(Type || (Type = {}));
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(width, length, cover, id, price, name) {
        if (name === void 0) { name = 'Album'; }
        var _this = _super.call(this, name, cover, id, Type.Plain, price) || this;
        _this.width = width,
            _this.length = length;
        return _this;
    }
    Album.prototype.showData = function () {
        console.log("\u0422\u043E\u0432\u0430\u0440 - ".concat(this.name, ", \u0446\u0435\u043D\u0430 - ").concat(this.getPrice(), " - \u0442\u0438\u043F \u043E\u0431\u043B\u043E\u0436\u043A\u0438 ").concat(this.cover, ", \u0440\u0430\u0437\u043C\u0435\u0440 -").concat(this.width, "X").concat(this.length));
    };
    return Album;
}(product_js_1.Product));
exports.Album = Album;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxidW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGJ1bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFdEMsWUFBWTtBQUNaLElBQUssSUFHSjtBQUhELFdBQUssSUFBSTtJQUNMLGlDQUFLLENBQUE7SUFDTCxpQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUhJLElBQUksS0FBSixJQUFJLFFBR1I7QUFFRDtJQUEyQix5QkFBYTtJQUtwQyxlQUFZLEtBQWEsRUFBRSxNQUFjLEVBQUUsS0FBWSxFQUFFLEVBQVUsRUFDL0QsS0FBYyxFQUFFLElBQXNCO1FBQXRCLHFCQUFBLEVBQUEsY0FBc0I7UUFEMUMsWUFFSSxrQkFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUc1QztRQUZHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztZQUNkLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBOztJQUM1QixDQUFDO0lBQ0Qsd0JBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQVcsSUFBSSxDQUFDLElBQUksMENBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSw4RUFBa0IsSUFBSSxDQUFDLEtBQUsscURBQWEsSUFBSSxDQUFDLEtBQUssY0FBSSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQTtJQUNwSSxDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQUFmRCxDQUEyQixvQkFBTyxHQWVqQztBQWZZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbmltcG9ydCB7IENvdmVyIH0gZnJvbSAnLi90eXBlcy9jb3Zlci5qcydcbi8v0JfQsNC00LDQvdC40LUgMiBcbmVudW0gVHlwZSB7XG4gICAgUGxhaW4sXG4gICAgR3JhcGhcbn1cblxuZXhwb3J0IGNsYXNzIEFsYnVtIGV4dGVuZHMgUHJvZHVjdDxUeXBlPiB7XG5cbiAgICB3aWR0aDogbnVtYmVyXG4gICAgbGVuZ3RoOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBjb3ZlcjogQ292ZXIsIGlkOiBudW1iZXIsXG4gICAgICAgIHByaWNlPzogbnVtYmVyLCBuYW1lOiBzdHJpbmcgPSAnQWxidW0nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGNvdmVyLCBpZCwgVHlwZS5QbGFpbiwgcHJpY2UpXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCxcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgfVxuICAgIHNob3dEYXRhKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhg0KLQvtCy0LDRgCAtICR7dGhpcy5uYW1lfSwg0YbQtdC90LAgLSAke3RoaXMuZ2V0UHJpY2UoKX0gLSDRgtC40L8g0L7QsdC70L7QttC60LggJHt0aGlzLmNvdmVyfSwg0YDQsNC30LzQtdGAIC0ke3RoaXMud2lkdGh9WCR7dGhpcy5sZW5ndGh9YClcbiAgICB9XG5cbn0iXX0=