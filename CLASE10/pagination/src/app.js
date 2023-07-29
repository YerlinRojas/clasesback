import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRouter from './routes/views.route.js'

const app= express ()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + './views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)



app.listen(8080)