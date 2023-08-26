//programa que escribe hora y fecha 
//leer archivo y mostrarlo por consola
//mofulos fs de tipo callbacks


const fs = require ('fs')
const file = 'ejemploHORAFECHA.txt'
const fileDate = Date ()

fs.writeFile (file, fileDate, error =>{
    if (error) return console.log("error al crear archivo")
    console.log("archivo creado")
    fs.readFile( file, 'utf-8' , (error, contenido)=>{
        if(error) return console.log("error al leer archivo")
        console.log("contenido: ", contenido)
    })
} )
