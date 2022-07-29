
// function fib(n: number) {
//     let cur = 1, prev = 1;
//     for (let i = 3; i <= n; i++) {
//         [cur, prev] = [cur + prev, cur];
//     }
//     return cur;
// }

const fib = (n: number): number[] => {
    let fibArr: number[] = [];
    let prev = 0,
        next = 1;
    for (let i = 0; i < n; i++) {
        let temp = next;
        next = prev + next;
        prev = temp;
        fibArr.push(prev)
    }
    return fibArr
}

function checkAdnTransform(arr: string[]): void {
    if (arr.length = 1) {
        const number = parseInt(arr[0]);
        if (!isNaN(number)) {
            console.log(fib(number));
        } else {
            console.log('Вы ввели не число');
        }
    } else {
        console.log('Введите одно число');
    }
}

const array = process.argv.slice(2);
checkAdnTransform(array);
