// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. При копировании массива - функция применится к каждому элементу копируемого массива. 
// newL = copy(list, function(value){ return value*10; })

const list = [1, 2, 3, 4];

function copy(array, func) {
    let newList = new Array();
    
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (func !== 'undefined' && typeof func == "function") {
            value = func(array[i]);
        } 

        newList.push(value);
    }

    return newList;
}

// let newList = copy(list);
let newList = copy(list, function(value) { return value * 10; });
console.log(newList);

