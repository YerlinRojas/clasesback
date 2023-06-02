const dividir = (dividendo, divisor) => {
    const promesa = new Promise ((resolve, reject)=>{
        if (divisor == 0) reject ("divisor es 0")
        else resolve (dividendo/divisor)
    })

    return promesa
}

//para resolverla la promesa se debe poner then y cacth
dividir (54,0)
    .then (resultado => console.log("el resultado es", resultado))
    .catch (error => console.error(error))

    //se realiza una constante para poder resolver dos promesas con diferentes numeros 
    const p1 = dividir (41,5)
    //pero si se puede resolver una promesa dentro de otra, de esta manera utilizamos promesas en vez de callbacks
    p1
    .then (resultado => "el resultado es" + resultado)
    .then (otroResultado => {
        console.log(otroResultado)
        const tt = 7
        return tt
    } )
    .then (r => {console.log(r)})
    .then (r => console.log(r))

    .catch (error => console.error(error))

//se ejecuta en paralelo