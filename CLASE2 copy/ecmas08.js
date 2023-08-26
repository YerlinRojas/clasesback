const imp = {
    carro:40,
    iva:4,
    abl:50
}

//Para sacar las entradas del OBJETO en un ARRAy

const parLlaveValor= Object.entries(imp)
console.log(parLlaveValor) 

//Para sacar solo la entrada en un array
const llave = Object.keys(imp)
console.log(llave)

//para obtener solo los Valores en un ARRAY
const valor= Object.values(imp)
console.log(valor)

//REDUCE
const gastosTotales = valor.reduce((acc, item)=>{
    console.log( "esto es acumulador y item ", acc,item)
    return acc + item
},0)

console.log(gastosTotales)