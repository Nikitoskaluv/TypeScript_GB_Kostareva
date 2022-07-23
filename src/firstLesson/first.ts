//Функция вычисляет суммму со скидкой. На вход передается 2 параметра сумма и скидка. 


const getPriceWithDiscount = (summ: number | undefined, discount: number | undefined): number => {
    if (typeof summ === 'number' && !isNaN(summ) && typeof discount === 'number' && !isNaN(discount)) {
        return summ - (summ * discount / 100);
    }
    else {
        console.log(`${summ} или ${discount}`);
        throw new Error('Введите данные правильно');
    }
};
const args: string[] = process.argv.slice(2);
if (args.length <= 2) {
    const priceWithdiscount: number = getPriceWithDiscount(parseInt(args[0]), parseInt(args[1]));
    console.log(priceWithdiscount);
}
else {
    throw new Error('Введите данные правильно');
}