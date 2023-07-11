import express from 'express'
import __dirname from './utils.js'

import handlebars from 'express-handlebars'
import routerViews from './router/views.router.js'

import {Server} from 'socket.io'



const app = express()
const httpServer = app.listen(8080, ()=> console.log("Listen..."))
const io = new Server(httpServer)

//configuracion de handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
//...........................................


app.use('/static', express.static(__dirname + '/public'))

app.get('/health', (req,res) =>{
    res.send('ok')
})

//router
app.use('/', routerViews)
//.......

//conecction enviar recibir y recibir desde la app
const message = []
io.on('connection', socket=>{
   socket.on('new', user =>{
    console.log(`${user} se acaba de conectar`)
   }) 

   socket.on('message', data =>{
    message.push(data)
    io.emit('logs', message)
   })
})