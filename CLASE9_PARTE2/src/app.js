import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import pokeRouter from './routes/pokemon.router.js'

const app = express()
//para taer de json info por post
app.use(express.json())

//configurar motor de plantilla
app.engine('handlebars', handlebars)
app.set('views', __dirname)
app.set('view engine', handlebars)


app.use('/pokemon', pokeRouter)
app.get('/', (req,res)=> ('its works great'))

const server = app.listen(8080, () => console.log('Listening..'))
server.on('error', e => console.error(e))
