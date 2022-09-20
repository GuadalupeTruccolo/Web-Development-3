const suma = (a, b) => { return a + b };
const resta = (a, b) => a - b;
console.log(suma(15, 20));
console.log(resta(15, 5));

const saludar = () => "Hello World!";
console.log(saludar())

let operando1 = 7;
let operando2 = 98;
let multiplicacion = `La multiplicación entre ${operando1} y ${operando2} equivale a ${operando1 * operando2}`;
console.log(multiplicacion);

const enJSON = '{"id":2,"producto":"Arroz"}';
console.log(typeof enJSON); // string

//JSON

let platosArgentinos = {
    dulces: 'pastelitos',
    salados: 'queso de cabra',
    frios: 'frutillas con crema',
    calientes: 'panqueques con dulce de leche'
}

const productosJSON = '{"dulces": "pastelitos", "salados": "queso de cabra", "frios": "frutillas con crema", "calientes": "panqueques con dulce de leche"}';
console.log(typeof productosJSON)

// De Objeto a JSON

// ej1

const persona = {
    nombre: "Juan",
    edad: 18,
    ciudad: "Rosario"
};

const variableJSON = JSON.stringify(persona);

//ej2

const productos = [
    { id: 1, producto: "Arroz", precio: 125 },
    { id: 2, producto: "Fideo", precio: 70 },
    { id: 3, producto: "Pan", precio: 50 },
    { id: 4, producto: "Flan", precio: 100 }
];

const variableenJSON = JSON.stringify(productos);
console.log(variableenJSON);

// De JSON a Objeto

// ej1

const miJsonPersona = '{"nombre": "Juan", "edad": 18, "ciudad": "Rosario"}';

const variableObjeto = JSON.parse(miJsonPersona);
console.log(variableObjeto);

//ej 2

const enJSON2 = '{"id":2,"producto":"Arroz"}';
const producto1 = JSON.parse(enJSON);

console.log(typeof enJSON2); // string
console.log(typeof producto1); // object
console.log(producto1.producto); // Arroz

//ej3

const codigoJSON = `{"id":1,"nombre":"Adult Complete Razas Medianas","marca":"PRO PLAN","marcall":"all","img":"img/productos/pro-plan-adult-complete-razas-medianas_143.png","mascota":"Perro","tipoprod":"Alimento Balanceado","peso":15,"precio":7000,"cantidad":100}`

const deJSONaObjeto = JSON.parse(codigoJSON);
console.log(deJSONaObjeto);
console.log(deJSONaObjeto.id);