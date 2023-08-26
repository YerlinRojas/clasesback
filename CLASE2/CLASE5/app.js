import express from 'express'
//nueva manera de import

//pasos
//npm init -y
//npm install express

//ir al packega y escribir
//"type"="module"

const app = express ()

app.get('/saludo', (request, response)=>{
response.send("hola desde express")
})

app.listen(8080, () =>console.log('runing on 8080....') )