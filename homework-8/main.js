// Написать функцию getMaxs(args), где args - любое количество массивов.
// Функция должна вернуть максимальные чисельные значения всех переданных массивов в виде строки, через разделитель `,`
let arr1 = [1, 2, 10, 4];
let arr2 = [3, 4, 6, 5];
let arr3 = [6, 9, 8, 7];

function getMaxs() {
    let max = new Array();
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "object") {
            let maxEl = 0;
            arguments[i].forEach(element => {
                if (element > maxEl) {
                    maxEl = element;
                }
            });
            max.push(maxEl);
        }
    }

    return max.join(',');
}

let maxSring = getMaxs(arr1, arr2, arr3);
console.log(maxSring);

