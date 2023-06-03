const fs = require('fs')
const filename= 'ejemplo.txt'

fs.writeFile(filename, 'Saludos' , error=>{
    console.log("genero error", error)
})

console.log("fin")