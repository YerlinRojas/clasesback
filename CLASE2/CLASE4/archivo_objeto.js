//para agregarobjetos a una base de datos

const fs = require ('fs')

const obj = {
    name: "Carol",
    age: 23
}

//pasar el obj a un string, creo un arch .json pq es un objeto. Pero se puede creear culquier tipo de archivo
const objString = JSON.stringify(obj)
fs.writeFileSync('objeto.json', objString)


//leer el contenido 
const contenido = fs. readFileSync('objeto.json', 'utf-8')
console.log("contenido en string",contenido)

//para agregar un obj hay que pasar el string a obj
const contenidoOb = JSON.parse(contenido)
contenidoOb.name = "valentin"
console.log("nuevo contenido",contenidoOb)

