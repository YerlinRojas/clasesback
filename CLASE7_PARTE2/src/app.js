import express from 'express'
import handlebars from 'express-handlebars'
import {Server} from 'socket.io'
import __dirname from './utils.js'
import routerViews from './router/views.router.js'
import router from './views/views.router.js'

const app = express()
const httpServer = app.listen(8080, ()=> console.log("liste"))
const io= new Server(httpServer)

app.engine('handlebears', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/static', express.static(__dirname + '/public'))
app.get('/health', (req,res) =>{
    res.send('ok')
})

io.on ('connection', socket=>{
    socket.on('new', user => console.log(`${user} se acaba de conectar`))
    socket.on ('message', data=>{
        io.emit(data)
    })
})
app.use('/', routerViews)