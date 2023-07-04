import express from 'express'
import usersRouter from './route/user.router.js'
import petsRouter from './route/pet.router.js'


const app = express ()


//EJECUTAR UNA FUNCION ANTES DE TODO MIDDLEWARE TIENE 3 ATRIBUTOS
//PARTE2
//los middleware se trabajan en otro archivo no en app esto solo es de ejemplo
//es una funcion que se e3jecuta antes de todas las funciones principales
//validaciones se hacen
//este es para todo la app
app.use((req,res,next)=>{
    const url= req.path
    console.log( 'time:',  new Date().toLocaleDateString())
    if(url=== '/health') return res.send('esta url esta prohoboda')
    next()
})
//-------

//otro ejemplo de middleware este solo se usa para mascotas endpoint
function myMiddleWare(req,res,next){
    req.dat='my data'
    console.log("agregando data")
    next()
}

//----

//a nivel de error middleWare regresa la descripcion del error
app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).send("algo anda mal")
})
//---

app.use(express.json())


//ejemplo de static 
//app.use('/static', express.static('./public'))
app.use(express.static('./public'))
//----------


app.use('/api/users', usersRouter)
app.use('/api/pets', myMiddleWare, petsRouter)
app.use('/health', (req,res)=> res.send('ok'))
app.listen(8080)
//PRIMER PARTE 
//ver min 12:20 y hacer ejemplo de html de formulario
//ver ejemplo de css el front va en el public 



//npm install multer