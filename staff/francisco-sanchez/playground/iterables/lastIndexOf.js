/*
The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
*/

/**Devuelve el último indice en el que puede encontrarse un elemento determinado realizando la búsqueda invertida*/

var lastIndexOf = function (iterable, searchElement, fromIndex) {
    if (fromIndex === NaN) return -1;


    if (fromIndex === undefined) {
        fromIndex = iterable.length;


    } else if (fromIndex < 0) {
        fromIndex = iterable.length + fromIndex;
    }


    for (var i = fromIndex; i >= 0; i--) {
        if (iterable[i] === searchElement) {
            return i;
        }
    }

    return -1;
}


var alumnos = {
    0: "Lucía González",
    1: "Santiago Pérez",
    2: "Ana Martínez",
    3: "Carlos Ruiz",
    4: "Lucía González",
    5: "Javier Sánchez",
    6: "Laura García",
    length: 7
};

console.log(alumnos);

console.log('When we search for "Carlos Ruiz" we will obtain 3');
console.log(lastIndexOf(alumnos, 'Carlos Ruiz'));
// Expected output: 3


console.log('When we search for "Lucía González" with index 4 we will obtain 4');
console.log(lastIndexOf(alumnos, 'Lucía González', 4));
// Expected output: 4


console.log('When we search for "Lucía González" with index -2 we will obtain 4');
console.log(lastIndexOf(alumnos, 'Lucía González', -2));
// Expected output: 4

console.log('When we search for "Lucía González" with index -4 we will obtain 4');
console.log(lastIndexOf(alumnos, 'Lucía González', -4));
// Expected output: 4

console.log('When we search for "Lucía González" with index Z we will obtain -1');
console.log(lastIndexOf(alumnos, 'Lucía González', 'Z'));
// Expected output: 4
