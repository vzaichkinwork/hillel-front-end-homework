// Написать функцию, которая примет как аргументы(параметры) два массива и сравнит суммы всех ЧИСЛОВЫХ элементов.
// Тот массив, сумма которого большая - должен вернутся функцией.

const arr1 = [1, 1, '10string', 1, 1, '100', '40', 100.99];
const arr2 = [2, 2, 2, '1string', 20, '200'];

function findArrayBiggestSumm(arr1, arr2) {
    let arr1Sum = 0;
    let arr2Sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] == "number") {
            arr1Sum += arr1[i];
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (typeof arr2[j] == "number") {
            arr2Sum += arr2[j];
        }
    }

    console.log('sum1 = ', arr1Sum);
    console.log('sum2 = ', arr2Sum);

    return arr1Sum > arr2Sum ? arr1 : arr2;
}

console.log(findArrayBiggestSumm(arr1, arr2));

