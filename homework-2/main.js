// 1. Ввести с клавиатуры 2 числа `a` и `b` (где `a <<< b`. Символ "<<<" - означает "сильно меньше" ). Запустить цикл перебора от `a` до `b`. Вывести в консоль квадраты чётных чисел.
let a = parseInt(prompt('Enter a'));

do {
    let b = parseInt(prompt('Enter b'));
} while ((a + 10) > b);

for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
        console.log(i * 2); // console.log(Math.pow(i, 2));
      }
}


// 2. Заставить пользователя ввести с клавиатуры число (не строку и не NaN).
do {
    let a = prompt('Enter number');
} while (isNaN(a));


// 3. Проверить число на простоту. Число вводить с клавиатуры.
let num = prompt('Enter number');

let isSimple = true;
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		isSimple = false;
		break;
	}
}

if (isSimple) {
    console.log('Simple number: ', num);
}


// 4. Посчитать сумму простых чисел от 0 до 250.
let sum = 0;
let min = 0;
let max = 250;

for (let i = min; i < max; i++) {
  let isSimple = true;
  
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
        isSimple = false;
        break;
    }
  }
  
  if (isSimple) {
    sum += i;
  }
}

console.log(sum);