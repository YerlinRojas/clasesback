//SINCRONICA bloqueante de fs


//importando una libreria
const fs = require('fs')
//se utiliza fs antes de cada modulo propio de la libreria

const filename = 'ejemplo.txt'
//apara escribir dentro de un doc. 
fs.writeFileSync(filename,'saludos')

console.log("end")

//para ver si el archivo existe
if(fs.existsSync(filename)){
    console.log("el archivo existe")

    //para LEER el contenido del arc
    const contenido = fs.readFileSync(filename, 'utf-8')
    console.log ('CONTENIDO:', contenido)

    //para agregar informacion al arch
    fs.appendFileSync(filename, '\mas saludos')
    
    //agregar contenido
    const contenidoNew = fs.readFileSync(filename, 'utf-8')
    console.log('contenido new:', contenidoNew)

    //borrar un archi
    fs.unlinkSync(filename)
}



