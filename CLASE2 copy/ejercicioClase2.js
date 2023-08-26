const productos = [
    {
        manzana: 5,
        peras: 5,
    },
   {
        banana:8,
        papa:7,
    } 
]

//Conseguir todos los objetos en un array

const tipos1 = Object.keys(productos[0])
console.log(tipos1)

const tipos2 = Object.keys(productos[0,1])
console.log(tipos2)

const todosTipos = {tipos1,tipos2}
console.log(todosTipos)


 //Obtener el total de los productos vendidos Object.values

const totalProductos = productos.reduce((acc, productos) => acc+ Object.values(productos).reduce((t,v)=> t+v,0),0 )
console.log(totalProductos)

const objProductos = productos.reduce((acc, productos) => acc + Object.keys(productos ) , 0 )
console.log(productos)

//Forma de hacer el reduce para los nombres 
const arrayNombres = productos.reduce((result, obj)=> {
    Object.keys(productos).forEach((v) =>{
        if (!result.includes(v)){
            result.push(v)
        }

    })
    return result
}, [])

console.log(arrayNombres)