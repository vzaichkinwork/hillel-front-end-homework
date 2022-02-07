// 1. Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. 
// Например A = [23,1,2,52,5,34,23,6,246,436];

n = +prompt('Enter n');

A = new Array(n);

for (i = 0; i < n; i++) {
    A[i] = Math.floor(Math.random() * 500);
}

console.log(A);

// a. проверить все числа на простоту, и найденные простые числа сохранить в массив B.
B = new Array();

for (i = 0; i < A.length; i++) {
    v = A[i];

    if (v < 2) {
        continue;
    }

    isSimple = true;
	for(j = 2; j < v; j++) {
        if (v % j == 0) {
            isSimple = false;
            break;
        }
    }

    if (isSimple) {
        B.push(v);
    } 
}

console.log(B);

// b. найти максимальное число и минимальное число.
max = A[0];
min = A[0];

for (i = 0; i < A.length; i++) {
    if (A[i] > max) {
        max = A[i];
    }

    if (A[i] < min) {
        min = A[i];
    }
}

console.log(max, min);

// 2. Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. 
// Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив. 
// Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).
for (i = 0; i < A.length / 2; i++) {
    let tmp = A[i];
    A[i] = A[(A.length -1) - i];
    A[(A.length -1) - i] = tmp;
}

console.log(A);

// 3. Создать массивы А и В. Заполнить случайными числами. Найди все элементы которые повторяются в массивах А и B.
n = +prompt('Enter n');

A = new Array(n);
B = new Array(n);
C = new Array();

for (i = 0; i < n; i++) {
    A[i] = Math.floor(Math.random() * 20);
    B[i] = Math.floor(Math.random() * 20);
}

for (i = 0; i < n; i++) {
    if (A[i] == B[i]) {
        C.push(A[i]);
    }
}

console.log(A);
console.log(B);
console.log(C);

// 4. В одномерном массиве произвести такую замену: 
// 1 элемент поменять с 2, 3 элемент поменять с 4, 5 элемент поменять с 6 и тд. 
// Если длинна массива непарная - последний элемент не трогать.
// a. Например: было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

A = [1, 2, 3, 4, 5, 6, 7];

for (i = 0; i < A.length - 1; i += 2) {
    let tmp = A[i];
    A[i] = A[i + 1];
    A[i + 1] = tmp;
}

console.log(A);