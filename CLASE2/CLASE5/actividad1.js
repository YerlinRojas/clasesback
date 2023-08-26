import express from 'express'

const app = express ()
app.get('/bienvenido', (req,res)=>{
    res.send(`<h1 style = "color">Hola mundo</h1>`)
})

app.get('/usuario', (req,res)=>{
   const usuario ={
    nombre : "yer",
    apellido : "jj"

   }
   res.send(`<h1 style = "color"> nombre: ${usuario.nombre} </h1>`)
})
app.listen(8080, () => {
    console.log("runing on ")
})