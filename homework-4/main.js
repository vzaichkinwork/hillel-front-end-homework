// В двумерном массив удалить столбцы где сумма элементов столбца < 0. 
// Массив должен быть размером 10 на 10, заполненым случайными числам в диапазоне от -20 до +20
const n = 10;
const m = 10;

A = new Array(n);

// заполнили массив
for (row = 0; row < A.length; row++) {
    A[row] = new Array(m);
    for (col = 0; col < A[row].length; col++) {
        A[row][col] = Math.floor(Math.random() * 41 - 20);  

        document.write(A[row][col] + '&nbsp;&nbsp;&nbsp;');
    }
    document.write('<br />');
}

document.write('<br />');

// посчитали сумму элементов столбца
let sum = A[0].slice();
for(row = 1; row < A.length; row++) {
    for(col = 0; col < sum.length; col++) {
        sum[col] += A[row][col];
    }
}

console.log(sum);
document.write('sum of columns = ' + sum);
document.write('<br />----------------<br />');

// удалили нужные столбцы
for (row = 0; row < A.length; row++) {
    for (col = A[row].length - 1; col >= 0; --col) { 
        if (sum[col] < 0) {
            A[row].splice(col, 1);
        }
    }
}

// вывели итоговый массив
for (row = 0; row < A.length; row++) {
    for (col = 0; col < A[row].length; col++) {
        document.write(A[row][col] + '&nbsp;&nbsp;&nbsp;');
    }
    document.write('<br />');
}

console.log(A);