
// ejercicio no lo resolvio , pasa a async_await2
const suma = (num1, num2) => {
    return new Promise ((reject, resolve) =>{
        if (num1 === 0 || num2 ===0) reject("operacion inecesario")
        else if (num1<0 || num2 <0 ) reject("solo numeros positivos")
        else resolve(num1+num2)
    })    
}
const resta = (num1 , num2 )=> {
    return new Promise ((reject, resolve) =>{
        if (num1 === 0 || num2 === 0) return reject("operacion innecesario")
        //para validar el resultado no sea negativo se realiza una funcion
        // se coloca return para que no continue
        const result = num1 -num2
        if(result < 0) return reject ("solo numeros menores al restado")
        return resolve (result) 
    })    
}
const multiplicar = (num1 , num2) => {
        return new Promise ((reject, resolve) =>{
            //como la condicion es que los num sean mayores entonces no hay numeros negativos
            if (num1<0 || num2 <0 ) reject("solo numeros positivos")
            else resolve(num1 * num2)
        })
    }
const dividir = ( dividendo, divisor ) => {
        return new Promise ((reject, resolve) =>{
            if (dividendo<0 || divisor<0 ) return reject("solo numeros positivos")
            if (divisor === 0) return reject("divisor solo positivo")
            return resolve (dividendo/divisor)
        })
    }

//aca se ejecutan con el then y catch
    suma(1,3)
    .then (result => console.log(result))
    .catch(e => console.error(e))

     resta(8, 5)
    .then (result => console.log( result))
    .catch(e => console.error(e))

    
    multiplicar(5, 5)
    .then (result => console.log( result))
    .catch(e => console.error(e))

    
    dividir(7, 5)
    .then (result => console.log( result))
    .catch(e => console.error(e))


//aca se ejecutan con senteces async/await

console.log ( "------------------>")
const fuctionAsync = async() => {
    try {
        console.log(await suma(1,3))
        console.log(await resta(1,1))
        console.log(await multiplicar(5, 5))
        console.log(await dividir(2, 5))
    } catch (error) {
        console.log("errror", error)
    }
}

//LLAMAR SIMEPRE A LA FUNCION ASYNC PARA EJECUTARLA

fuctionAsync()