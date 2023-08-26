const dividir = (dividendo, divisor) => {
    const promesa = new Promise ((reject, resolve) => {
        if (divisor == 0) reject ("divisor es 0")
        else resolve (dividendo / divisor)
    })
    return promesa
}

//Funcion async 
/* const funcionAsync = async () => {
    try{
    }
    catch () {
    }
} */


const funcionAsync = async() => {
    try{
        const resultado = await dividir (10,2)
        .then (resultado => {"el resultado es" + resultado})
        .then (otroResultado => {
        console.log(otroResultado)
        const tt = 7
        return tt
        } )
        .then (r => {console.log(r)})
        .then (r => console.log(r))

        const resutaldo2= await dividir (5,0)

        console.log (resultado,resutaldo2)
    }
    catch(e){console.log("se ejecuto un error", e)}
}

//llamamos a la funcion
funcionAsync ()