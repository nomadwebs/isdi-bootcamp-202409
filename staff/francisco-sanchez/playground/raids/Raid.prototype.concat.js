//Creamos la función constructora Raid
//-------------------------------------

var Elemento = function (name, desc) {
    this.name = name;
    this.desc = desc
}

var a = new Elemento('A', 'Abrir');
var b = new Elemento('B', 'Ballena');
var c = new Elemento('C', 'Corcho');
var d = new Elemento('D', 'Deliberar');
var e = new Elemento('E', 'Entropía');

var f = new Elemento('F', 'Fabuloso');
var g = new Elemento('G', 'Gato');
var h = new Elemento('H', 'Hospital');
var i = new Elemento('I', 'Inteligente');
var j = new Elemento('J', 'Jovial');


var abcde = { length: 5 };
abcde[0] = a;
abcde[1] = b;
abcde[2] = c;
abcde[3] = d;
abcde[4] = e;

var fghij = { length: 5 };
fghij[0] = f;
fghij[1] = g;
fghij[2] = h;
fghij[3] = i;
fghij[4] = j;


// Y hasta aquí he creado los dos arrays de objetos

//Ahora voy a lanzar el concat

//CASE: Personal concat function using objects and returning one single object
console.log('Personal concat function to concatenate as arrays as the user send by parameter');
var concatPersonalObj = function () { //--> Como estams accediendo por Arguments no hace falta declarar ningun parámetro en la función
    var objResultado = { length: 0 };

    for (var i = 0; i < arguments.length; i++) {

        for (var j = 0; j < arguments[i].length; j++) {
            //Always I'll concatenate the new word in the last position of the new array resultado
            objResultado[objResultado.length] = arguments[i][j];
            objResultado.length++;
        }
    }
    return objResultado;
}

console.log(concatPersonalObj(abcde, fghij));