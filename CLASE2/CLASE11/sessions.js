import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({
    secret: 'paraFirmarElIdEnElBrowser',
    resave:true, //para mantener session actve

    saveUninitialized:true //guarda calquier cosa
    //si se deja en false , si la sesion esta vacia no va a guardar nada}
    //si esta en true guarda aunq la session este vacia
}))

app.get('/',(req,res)=>{
    res.send('ok')
})

//sesiones config
app.get('/session', (req,res)=>{
    console.log(req.session)

    if (req.session.counter){
        req.session.counter++
        return res.send(`se ha visitado el sitio ${req.session.counter}`)
    }
    req.session.counter =1
    res.send('welcome')
})

//matar session
app.get('/logout', (req,res)=>{
    req.session.destroy(err =>{
        if(err) return res.send('logout error')
        return res.send('logOut ok')
    })
})

//Login
const DB = [
    {
        name: 'Noah Lauro',
        username:'noha',
        password : 'secret',
        rol:'admin'
    }
]

app.get('/login', (req,res)=>{
    const { username, password } = req.query
    const user = DB.find(u=> u.username === username && u.password === password)
    if ( !user) return res.send('ínvalid credetial')
    req.session.user = user
    res.send('login success!')
})

function AuthenticatorAssertionResponse(req, res, next){
    if(req.session?.user) return next()
    return res.status(401).send('error de athuntication')
}

app.get('/private', (req,res)=>{
    res.send('esta pagina la puede ver la persona logueada' + JSON.stringify(req.session))
})



app.listen(8080)