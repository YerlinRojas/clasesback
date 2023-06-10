import express from 'express'
const app = express ()

//dinamica

app.get('/saludo/:nombre', (req,res)=>{
    console.log(req.param)
    res.send(`saludos a`)
})
//pasarle nombre por el navegador
app.listen(8080)
