// В объекте data существует метод addRecord, который аргументами получает любой набор объектов. 
// Метод addRecord добавляет все свойства переданных объектов в data.

 data = {
     addRecord: function() {
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "object") {
            for (let key in arguments[i]) {
                this[key] = arguments[i][key];
            }
        }
      }
    },
     p: 600,
     str: 'hello',
     y: -50
 }
 data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
 
 console.log(data.x); // 50
 console.log(data.y); // 20
 console.log(data.z); // 30
 console.log(data.p); // 600
 console.log(data.str); // 'hello'

