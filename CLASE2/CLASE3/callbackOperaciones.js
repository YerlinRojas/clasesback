const suma = (num1, num2) =>  num1 + num2
const resta = (num1 , num2 )=> num1 - num2
const multiplicar = (num1 , num2) => num1 * num2
const dividir = ( num1, num2 ) => num1 / num2

const realizarOperacion = (num1, num2, tipoOperacion) => {
    console.log("voy a realizar una operacion")
    const resultado = tipoOperacion(num1, num2)
    console.log("el resultado es", resultado)

}

realizarOperacion(2,5, suma)
realizarOperacion(5,4,resta)
realizarOperacion(8,9,multiplicar)
realizarOperacion(10,7,dividir)


//IMPORTANTE
//Estructura del callback

const estructuraCallback = (error, resultado)=>{
    if(error){
            //hacer algo con el error
    }else{
            //hacer algo con el resultado 
    }
}

