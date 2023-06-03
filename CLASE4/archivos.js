//sincronica bloqueante de fs
//importando una libreria
//lo crea
const fs = require('fs')

const filename = 'ejemplo.txt'

fs.writeFileSync(filename,'saludos')

console.log("end")
//si el aarchivo existe lo reecruver

//para ver si el archivo existe
if(fs.existsSync(filename)){
    console.log("el archivo existe")
    //para ler el contenido del arc
    const contenido = fs.readFileSync(filename, 'utf-8')
    console.log ('CONTENIDO:', contenido)

    //para agfregar informacion al arch
    fs.appendFileSync(filename, '\mas saludos')
    
    //agregar contenido
    const contenidoNew = fs.readFileSync(filename, 'utf-8')
    console.log('contenido new:', contenidoNew)

    //borrar un archi
    fs.unlinkSync(filename)
}



