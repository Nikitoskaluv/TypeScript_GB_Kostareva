"use strict";
exports.__esModule = true;
exports.MyMap = void 0;
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.data = {};
    }
    MyMap.prototype.set = function (key, value) {
        this.data[key] = value;
    };
    MyMap.prototype.has = function (key) {
        return Boolean(this.data[key]);
    };
    MyMap.prototype.get = function (key) {
        return this.data[key];
    };
    MyMap.prototype.remove = function (key) {
        if (this.has(key)) {
            delete this.data[key];
            return true;
        }
        return false;
    };
    MyMap.prototype.clear = function () {
        this.data = {};
    };
    MyMap.prototype.getAll = function () {
        return this.data;
    };
    MyMap.prototype.setAll = function (arr) {
        var _this = this;
        arr.forEach(function (el) {
            var key = +Object.getOwnPropertyNames(el);
            _this.data[key] = el[key];
        });
    };
    return MyMap;
}());
exports.MyMap = MyMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNeU1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTtJQUFBO1FBQ0ksU0FBSSxHQUFpQixFQUFrQixDQUFBO0lBK0IzQyxDQUFDO0lBN0JHLG1CQUFHLEdBQUgsVUFBSSxHQUFNLEVBQUUsS0FBUTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsbUJBQUcsR0FBSCxVQUFJLEdBQU07UUFDTixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNELG1CQUFHLEdBQUgsVUFBSSxHQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzQkFBTSxHQUFOLFVBQU8sR0FBTTtRQUNULElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELHFCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFDbkMsQ0FBQztJQUNELHNCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxHQUF3QjtRQUEvQixpQkFLQztRQUpHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1lBQ1gsSUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNsYXNzIE15TWFwPEsgZXh0ZW5kcyBudW1iZXIgfCBzdHJpbmcgfCBzeW1ib2wgPSBudW1iZXIsIFYgPSBhbnk+e1xuICAgIGRhdGE6IFJlY29yZDxLLCBWPiA9IHt9IGFzIFJlY29yZDxLLCBWPlxuXG4gICAgc2V0KGtleTogSywgdmFsdWU6IFYpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgaGFzKGtleTogSyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmRhdGFba2V5XSlcbiAgICB9XG4gICAgZ2V0KGtleTogSyk6IFYgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gICAgfVxuICAgIHJlbW92ZShrZXk6IEspOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9IGFzIFJlY29yZDxLLCBWPjtcbiAgICB9XG4gICAgZ2V0QWxsKCk6IFJlY29yZDxLLCBWPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFcbiAgICB9XG4gICAgXG4gICAgc2V0QWxsKGFycjogQXJyYXk8UmVjb3JkPEssIFY+Pik6IHZvaWQge1xuICAgICAgICBhcnIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICtPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlbCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFba2V5XSA9IGVsW2tleV1cbiAgICAgICAgfSlcbiAgICB9XG59Il19