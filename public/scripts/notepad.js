"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notepad = void 0;
const product_js_1 = require("./product.js");
//Задание 2 
var Type;
(function (Type) {
    Type[Type["Plain"] = 0] = "Plain";
    Type[Type["Graph"] = 1] = "Graph";
})(Type || (Type = {}));
class Notepad extends product_js_1.Product {
    constructor(name, cover, id, price) {
        super(name, cover, id, Type.Graph, price);
    }
    canBuy() {
        return typeof this.price === 'number';
    }
    showData() {
        super.showData();
    }
}
exports.Notepad = Notepad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub3RlcGFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF1QztBQUV2QyxZQUFZO0FBRVosSUFBSyxJQUdKO0FBSEQsV0FBSyxJQUFJO0lBQ0wsaUNBQUssQ0FBQTtJQUNMLGlDQUFLLENBQUE7QUFDVCxDQUFDLEVBSEksSUFBSSxLQUFKLElBQUksUUFHUjtBQUVELE1BQWEsT0FBUSxTQUFRLG9CQUFhO0lBS3RDLFlBQVksSUFBWSxFQUFFLEtBQVksRUFBRSxFQUFVLEVBQUUsS0FBYztRQUM5RCxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQTtJQUN6QyxDQUFDO0lBQ0QsUUFBUTtRQUNKLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFmRCwwQkFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9wcm9kdWN0LmpzXCI7XG5pbXBvcnQgeyBDb3ZlciB9IGZyb20gJy4vdHlwZXMvY292ZXIuanMnXG4vL9CX0LDQtNCw0L3QuNC1IDIgXG5cbmVudW0gVHlwZSB7XG4gICAgUGxhaW4sXG4gICAgR3JhcGhcbn1cblxuZXhwb3J0IGNsYXNzIE5vdGVwYWQgZXh0ZW5kcyBQcm9kdWN0PFR5cGU+IHtcblxuICAgIHByaWNlPzogbnVtYmVyXG5cblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY292ZXI6IENvdmVyLCBpZDogbnVtYmVyLCBwcmljZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcihuYW1lLCBjb3ZlciwgaWQsIFR5cGUuR3JhcGgsIHByaWNlKTtcbiAgICB9XG5cbiAgICBjYW5CdXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcmljZSA9PT0gJ251bWJlcidcbiAgICB9XG4gICAgc2hvd0RhdGEoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnNob3dEYXRhKCk7XG4gICAgfVxufSJdfQ==