// Método forEach - Callback

// EJ 1

const nombres = ["María", "Pedro", "Juan"]

nombres.forEach((resultado, i) => console.log(resultado, i))

// EJ 2

const numeros = [1, 3, 5];
const alCuadrado = [];

numeros.forEach(num => alCuadrado.push(num * num))

console.log(alCuadrado)

// Gral content

const playlist = ['La noche de anoche', 'Ropa cara', 'Baila conmigo', 'Playa'];

let cancionUno = playlist[0];
console.log(cancionUno);

let cancionTres = playlist[2];
console.log(cancionTres);

// Propiedad .length: Por medio de la propiedad .length podemos obtener la cantidad de elementos que tiene un array

let peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
console.log(peliculas.length); // 4

// Método .indexOf: El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array

const villanosDeBatman = ['Joker', 'Bane', "Ra's Al Ghul", 'Scarecrow'];
if (villanosDeBatman.indexOf('Scarecrow') > -1) {
    console.log('Scarecrow es uno de los villanos de Batman.');
}

// Función .push: La función .push permite ingresar un o más nuevos elementos luego del último puesto array. Esto implica que los elementos pueden no tener valor, pero la posición es respetada en orden siempre al final del array

const jugadores = ['Messi', 'Riquelme'];
console.log(jugadores);
console.log(' ');
jugadores.push('CR7', '', 'Fabbiani');
console.log(jugadores);

// Función .pop: La función .pop elimina el último elemento de un array y devuelve su valor al método que lo llamó. Esto quiere decir que podemos llegar a guardar el valor que se está eliminando y reutilizarlo. Si se llama a pop() en un array vacío, devuelve   undefined:

const jugadores2 = ['Messi', 'Riquelme', 'CR7', 'Fabbiani'];
let eliminado = jugadores2.pop();
console.log(jugadores2);

// Método find()

// EJ 1

let provincias = ["Buenos Aires", "Córdoba", "Santa Fe"]
provincias.find(iterandoPorCadaItem => iterandoPorCadaItem == "Buenos Aires")

// EJ 2

let clientes = [{
    nombre: 'ABC Inc',
    creditos: 100
}, {
    nombre: 'ACME Corp',
    creditos: 200
}, {
    nombre: 'IoT AG',
    creditos: 300
}]

console.log(clientes.find(c => c.creditos > 100));

// Método .filter()

// EJ 1

let numbers = [1, 5, 23, 4, 12, 45, 78, 8, 8.9, 10, 11, 3.4, 10.1, 84, 6]

let greaterTen2 = numbers.filter(number => number > 10);
console.log(greaterTen2);

// EJ 2

let ciudades = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];

let grandesCiudades = ciudades.filter(function (e) {
    return e.population > 3000000;
});
console.log(grandesCiudades);

// Método map()

// EJ 1

let gatos = [
    {
        color: 'azul',
        nombre: 'gru',
        edad: 2
    },
    {
        color: 'rojo',
        nombre: 'Zeus',
        edad: 5
    },
    {
        color: 'Naranja',
        nombre: 'Coby',
        edad: 37
    },
];

let dobleEdad = gatos.map(doblar)
console.log(dobleEdad)

function doblar(gato) {
    return gato.edad * 2;
}

// EJ 2

const personas = [
    {
        nombre: 'Luis',
        edad: 22
    },
    {
        nombre: 'Juan',
        edad: 50
    },
    {
        nombre: 'David',
        edad: 77
    },
];

const regresarNombre = function (persona) {
    return persona.nombre;
}
const nombresDePersonas = personas.map(regresarNombre);

console.log(nombresDePersonas)

// Spread Operator - Convierte un array o un objeto en el conjunto de valores que contiene. - Podemos hacer copias de arrays y además añadir elementos

// EJ 1

let hardware = ['teclado', 'Mouse'];
let software = ['Windows', 'Photoshop'];
console.log([...hardware, ...software]);

// EJ 2

let equipos = ['River', 'Boca', 'Independiente'];
let nuevoEquipo = ['Racing', ...equipos];
console.log(nuevoEquipo); // Racing, River, Boca, Independiente

// EJ 3 - Este metodo es mas moderno que el uso de "unshift", para agregar al final se haría lo siguiente:

let equipos2 = ['Racing', 'River', 'Boca', 'Independiente'];
let nuevoEquipo2 = [...equipos2, 'Defensa y Justicia'];
console.log(nuevoEquipo2); // Racing, River, Boca, Independiente, Defensa y Justicia

// EJ 4 - Concatenar

let numeros2 = [1, 2, 3];
let meses = ['enero', 'febrero', 'marzo'];
console.log([...numeros2, ...meses]); // 1,2,3,enero,febrero,marzo
