// Написать функцию `compress(list)`, которая сжимает серии массива, состоящего из единиц и нулей по следующему принципу:
// например, массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1] преобразуется в [4,7,2,4,1,1]

// var list = compress([0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1]);

// console.log(list); // [4,7,2,4,1,1]

let list = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1];

function compressList(array) {
    let countZeros = 0; 
    let countOnes = 0; 

    for (let i = 0; i < array.length; i++) {
        let start = 0; 
        if (array[i] === 0) {
            countZeros++;
            array.splice(start, countZeros + 1, countZeros);
            console.log(array);
        } 
    }

    return array;
}

let compressedList = compressList(list);
console.log(compressedList);
