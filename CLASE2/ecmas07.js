
//MAP
// crear una const y mapear

const valor= [ 1 ,2, 3, 4 ]

const nuevoValor= valor.map((numero, idx) => {

    console.log(numero, idx)
    return numero + 1


})

console.log(nuevoValor)



//NUMERO Elevado a la indice

const idxElevado = [1,2,3,4]

const nuevoIdxElevado= idxElevado.map((numero,idx) => numero ** idx)

//se puede colocar cualquier numero en el indice
const nuevoIdxElevadoNumero = idxElevado.map(numero => numero ** 2)

console.log(nuevoIdxElevado)
console.log(nuevoIdxElevadoNumero)


//INCLUDES 
const nombres = [ "marco", "jaime", "flor"]
//el incluides es sensible a Mayus,Min, numerosStrings...
console.log(nombres.includes("marcos"))
console.log(nombres.includes("marco"))

if (nombres.includes("marco")){
    console.log("marco llego")
}else{
    console.log("marco  no llego")
}

