//ASINCRONICA CALLBACK

const fs = require('fs')
const filename= 'ejemploASINCRONICO.txt'

//son tres parametros , ( archivo, Lo que va a tener el arch, un error=>{})
//dentro del callback error se ejecutan las cosas que hacer en caso que falle
//se podria utilizar el else tambien
fs.writeFile(filename, 'Saludos' , error=>{
    //en todos los if para este caso, se detiene el error con el return de esta forma no se sigue ejecutando el codigo
    if (error) return console.log ("hubo un error al crear el archivo")
    fs.appendFile(filename, '\Agrego nuevo saludo', error=>{
        if (error)  return console.log ( "error al agregar saludo")
        fs.readFile(filename, 'utf-8', (error, contenido) => {
            if(error) return console.log("error al leer el archivo")
            console.log ("CONTENIDO" , contenido)
            fs.unlink(filename,error=>{
                if (error) return console.log("error al eliminar archivo")
                console.log("eliminado archivo")
            })
        })
    } )
})

console.log("fin")