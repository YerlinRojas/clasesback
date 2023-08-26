import express from 'express'
const app = express ()

app.get('/bienvenido', (req,res)=>{

    console.log(req.query)
    const edad= req.query.edad

    res.send(`tu edad es ${edad}`)
    //?edad=24 asi se pasa en el navegador
})
//pasarle la edad por el navegador
app.listen(8080)

