//SETTIMEOUT

const temporizador = (callback) => {
    setTimeout(()=>{
        //se realiza esta funcion para que pueda realizar otra cosa sino se pasa directo. abajo ejemplo
        callback()
    }, 5000)
}

const operacion = () => console.log ("bom")

console.log("tiktik")

temporizador(operacion)
console.log("finalizacion del proceso")


//ejemplo con con settimeOut duirecto 

const temporizador2 = (callback2)=>{
    setTimeout(callback2 , 5000)
}

//NOTA el setimeout siempre se va a ejecutar despues de todo asi este primero en el codigo.
//El siempre se coloca en la pila de ejcucion al final 


