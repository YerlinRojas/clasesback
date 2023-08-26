//es diferente a react 
//reempalzo de variables en html
//cambiar html antes de presentarle al usuario 
//ejemplos de herramientas para motopres de plantilñlas
//handlebars
//ejs
//pugjs

//diferencias con framework o librerias
//dependiedo del nivel de doinamismo 
//si es mucho se utiliza react si tiene poco o escaso handlebars
//para landing page es poco dinamismo se utiliza JS 

//npm install express-handlebars

import express from  'express'
import handlebars from  'express-handlebars'
import userRouter from './src/route/user1.router'


//para importar lo publico todo
app.use('static' , express.static('./src/public'))

const app = express()
//iniciar motor de plantilla
app.engine('handlebars', handlebars.engine())

//indicar donde estan las plantillas
app.set('views', './views')

//indicar que motor usar
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
    res.render('index',{
        name: 'valentin',
        title: 'my page'
    })
})

app.use('/user', userRouter)


app.listen(8080)

//NOTA ver min 15:12hrs carpeta de utils para correr todo implementarlo 
//app debe estar dentro de src 
//hay que hacer la carptea utils si no, no funciona me quede en 15:30hrs


