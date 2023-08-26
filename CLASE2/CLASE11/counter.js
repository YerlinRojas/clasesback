import express from 'express'
import session from 'express-session'
//ejercicoo de clase


const app = express()
app.use(session({
    secret : 'secret',
    resave: trye,
    saveUninitialized: true
})
)

app.get('/', (req,res)=>{
    const name = req.query?.name || ''
    if(name) req.session.name= name

    if(req.session.counter){
        req.session.counter++
        if(req.session.name) return res.send(`${req.session.name} visitaste la web ${req.session.counter} veces`)
        return res.send(`visita numero: ${req.session.couter}`)

    }
    req.session.counter = 1 
    if(req.session.name) return res.send(`Welcome ${req.session.name}`)
    return res.send(`te damos la bienvenida`)

})

app.listen(8080)