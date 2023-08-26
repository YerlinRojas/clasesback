import express from 'express'
import __dirname from './utils.js'
import mongoose from 'mongoose'
import MongoStore from 'connect-mongo'
import session from 'express-session'
import handlebars from 'express-handlebars'
import path from 'path'
import userRouter from './routes/session.router.js'

const app = express ()
const uri= "mongodb+srv://yerlinrojas808:9bnPPAq9xBLloP4U@yerlincluster.pxzyemm.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//VER HRS 1:08
//passport tenemos que instlar
//npm i passport passport-local
// se puede instlar con google o facebook libreria de pasport
app.use(session({
    store: MongoStore.create({
        mongoUrl: uri,
        dbName: 'clase11_01',
        mongoOptions:{
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl:15
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}))


app.use('/', userRouter)

mongoose.connect(uri, {
    dbName: 'clase11_01'
})
.then(()=> {
    console.log('DB connect')
    app.listen(8080)})
.catch(e => console.error(e))

