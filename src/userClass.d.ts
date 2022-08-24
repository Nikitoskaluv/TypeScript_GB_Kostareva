export class User {
    name: string
    surname: string
    login: string
    birthDate: string
    password: string
    cart: Array<Product>;

    constructor(name: string, surname: string, login: string, birthDate: string, password: string) {
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.birthDate = birthDate;
        this.password = password
    }
    addToCart(id: number, array: Array<Product>): void
    removeFromCart(id: number): void;
    countTotal(): number;
}
function checkAndSumm(obj: Product): number


