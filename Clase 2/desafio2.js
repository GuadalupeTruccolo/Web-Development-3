const usuarios = [
    {nombre: 'Carlos', apellido: 'Sánchez'},
    {nombre: 'Guadalupe', apellido: 'Trúccolo'},
    {nombre: 'Fernando', apellido: 'Alonso'},
];

let usuariosTotales = [...usuarios, {nombre: 'Sergio', apellido: 'Pérez'}]

console.log(usuariosTotales);

const nombres = function(usuario) {
    return usuario.nombre;
}
const susNombres = usuariosTotales.map(nombres);

console.log(susNombres)

const copiaDeUsuarios = {...usuariosTotales};
console.log(copiaDeUsuarios);