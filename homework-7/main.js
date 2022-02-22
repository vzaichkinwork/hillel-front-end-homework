// Написать функцию `compress(list)`, которая сжимает серии массива, состоящего из единиц и нулей по следующему принципу:
// например, массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1] преобразуется в [4,7,2,4,1,1]

// var list = compress([0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1]);

// console.log(list); // [4,7,2,4,1,1]

let list = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1];

function compressList(arr) {
    let result = new Array();
    let current = 0;
    let count = 0;

    for (let i = 0; i <= arr.length; i++) {
        
        if (arr[i] === current) {
            count++;
        } else {
            result.push(count);
            if (current == 0) {
                current = 1;
            } else {
                current = 0;
            }
            count = 1;
        }
    }

    return result;
}

var compressedList = compressList(list);

console.log(compressedList);


