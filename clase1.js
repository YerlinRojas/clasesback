console.log("hola")
let a = 45 +5 
console.log(a)


let employs =[
{
    id: 1,
    username: "carlos",
    last:"perez",
    age:24,
}, 
{
    id: 2,
    username: "tiziano",
    last:"rodriguez",
    age:41,
}, 
{
    id: 3,
    username: "hugo",
    last:"jimenez",
    age: 30,
}, 
{
    id: 4,
    username: "evan",
    last:"rojas",
    age:24,
}, 

]

//FIND
//si tiene mas variables utilizar corchetes , este metodo genera un booleano
let buscarEmpleado2 = employs.find((est) => {
    let found = est.id === 3
    console.log(found)
    return found
    
})


//FIND
//si es de una sola variable de busqueda se puede hacer en una linea sin corchetes. Me trae el array

let buscarEmpleado = employs.find(e=>e.id===3)


//el console no se puede hacer a found por fuera de la variable buscarEmpleado2, esta funcion solo vive dentro de la funcion que la llama
console.log(buscarEmpleado2)
console.log(buscarEmpleado)