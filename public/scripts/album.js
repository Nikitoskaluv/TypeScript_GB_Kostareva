"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const product_js_1 = require("./product.js");
//Задание 2 
var Type;
(function (Type) {
    Type[Type["Plain"] = 0] = "Plain";
    Type[Type["Graph"] = 1] = "Graph";
})(Type || (Type = {}));
class Album extends product_js_1.Product {
    constructor(width, length, cover, id, price, name = 'Album') {
        super(name, cover, id, Type.Plain, price);
        this.width = width,
            this.length = length;
    }
    showData() {
        console.log(`Товар - ${this.name}, цена - ${this.getPrice()} - тип обложки ${this.cover}, размер -${this.width}X${this.length}`);
    }
}
exports.Album = Album;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxidW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWxidW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXNDO0FBRXRDLFlBQVk7QUFDWixJQUFLLElBR0o7QUFIRCxXQUFLLElBQUk7SUFDTCxpQ0FBSyxDQUFBO0lBQ0wsaUNBQUssQ0FBQTtBQUNULENBQUMsRUFISSxJQUFJLEtBQUosSUFBSSxRQUdSO0FBRUQsTUFBYSxLQUFNLFNBQVEsb0JBQWE7SUFLcEMsWUFBWSxLQUFhLEVBQUUsTUFBYyxFQUFFLEtBQVksRUFBRSxFQUFVLEVBQy9ELEtBQWMsRUFBRSxPQUFlLE9BQU87UUFDdEMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDNUIsQ0FBQztJQUNELFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFLGtCQUFrQixJQUFJLENBQUMsS0FBSyxhQUFhLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDcEksQ0FBQztDQUVKO0FBZkQsc0JBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJ1xuaW1wb3J0IHsgQ292ZXIgfSBmcm9tICcuL3R5cGVzL2NvdmVyLmpzJ1xuLy/Ql9Cw0LTQsNC90LjQtSAyIFxuZW51bSBUeXBlIHtcbiAgICBQbGFpbixcbiAgICBHcmFwaFxufVxuXG5leHBvcnQgY2xhc3MgQWxidW0gZXh0ZW5kcyBQcm9kdWN0PFR5cGU+IHtcblxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBsZW5ndGg6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIsIGNvdmVyOiBDb3ZlciwgaWQ6IG51bWJlcixcbiAgICAgICAgcHJpY2U/OiBudW1iZXIsIG5hbWU6IHN0cmluZyA9ICdBbGJ1bScpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgY292ZXIsIGlkLCBUeXBlLlBsYWluLCBwcmljZSlcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoLFxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICB9XG4gICAgc2hvd0RhdGEoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDQotC+0LLQsNGAIC0gJHt0aGlzLm5hbWV9LCDRhtC10L3QsCAtICR7dGhpcy5nZXRQcmljZSgpfSAtINGC0LjQvyDQvtCx0LvQvtC20LrQuCAke3RoaXMuY292ZXJ9LCDRgNCw0LfQvNC10YAgLSR7dGhpcy53aWR0aH1YJHt0aGlzLmxlbmd0aH1gKVxuICAgIH1cblxufSJdfQ==