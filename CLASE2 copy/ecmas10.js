//TRIM 

const saludo = "    hola"
console.log(saludo.trim())

//base de datos para mensajes
const mensajes = []

const mensaje1 = "hola"
const mensaje2 = "adios"
const mensaje3 = " "

//funcion para quitar mensajes con trim basios 

function addMensage (msn) {
    if (msn.trim() != '')
    mensajes.push(msn)
}

addMensage(mensaje1)
addMensage(mensaje2)
addMensage(mensaje3)

console.log(mensajes)

//FLAT une todos en un array

const arrayAnidado = [
    1,23,"los",
     [ true, "juehs",526]
]

const todosArrys= arrayAnidado.flat()

console.log(todosArrys)