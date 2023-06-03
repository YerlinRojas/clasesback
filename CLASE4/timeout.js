const temporizador = (callback) => {
    setTimeout(()=>{
        callback()
    }, 5000)
}

const operacion = () => console.log ("bom")

console.log("tiktik")

temporizador(operacion)
console.log("finalizacion del proceso")
