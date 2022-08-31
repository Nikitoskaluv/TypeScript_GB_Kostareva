export class User {
    name;
    surname;
    login;
    birthDate;
    password;
    cart = [];

    constructor(name, surname, login, birthDate, password) {
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.birthDate = birthDate;
        this.password = password
    }
    addToCart(id, arrayOfProduct) {
        const productFromCart = this.cart.find(obj => obj.id === id);
        const productForPurchase = arrayOfProduct.find((obj => obj.id === id));

        if (productForPurchase.price) {
            if (!productFromCart) {;
                productForPurchase.quantity += 1;
                this.cart.push(productForPurchase);
            } else {
                productFromCart.quantity += 1;
            }
        } else {
            console.log('Товара нет в наличии')
        }
    }
    removeFromCart(id) {
        const productFromCart = this.cart.find(obj => obj.id === id)
        if (productFromCart) {
            if (productFromCart.quantity <= 1) {
                let index = this.cart.indexOf(productFromCart);
                this.cart.splice(index, 1);
            } else {
                productFromCart.quantity -= 1;
            }
        } else {
            console.log("Ошибка, такого товара в корзине нет")
        }
    }
    countTotal() {
        if (this.cart.length > 0) {
            return this.cart.map((obj => checkAndSumm(obj)));
        } else {
            return 0;
        }

    }

}

function checkAndSumm(obj) {
    let totalSumm = 0;
    totalSumm += obj.price * obj.quantity
    return totalSumm
}