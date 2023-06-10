//crear un servidor nativo sin librerias. el servidor escucha en el puerto 8080

const http = require ('http')

const server= http.createServer((request, response) => {
    console.log("se recibio un request")
    response.end('mi primer bankend')
})

//funcion para escuchar

server.listen(8080,( )=>{
    console.log('el servidor esta corriendo puerto  8080')
})
//puerta es linea que se conecta c on internet comunes 8080 y 3000
//para server real 80, algunas compuis tienes compflictos, solo puede un programa por puerto 

//entrar a http://127.0.0.1:8080/
//instalar nodemon para que reinici el script de una, sin necsidad de reinicir manualmente
//nodemon npm install -g nodemon