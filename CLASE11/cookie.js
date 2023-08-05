import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cookieParser('HacemosCookieCifrado'))

app.get('/', (req,res)=>{
    res.send('my cookie')
})

app.get('/set', (req,res)=>{
    res.cookie('cookieERI', 'cokie set', {maxAge: 3000})
    res.cookie('cookieForever', 'cokie set')
    res.cookie('cookieSigned', 'Valor de la cookie', {signed:true})
    .send('cookie seteada envio')
})
//tiempo del que se retiene la cookie maxAge

app.get('/get',(req,res)=>{
    const cookie = req.cookies
    const cookieSigned = req.signedCookies
    //atarpa tpdas las cookies

    console.log(cookie, cookieSigned)
    res.send('se ha leido la cookie')
})

app.get('/delete', (req,res)=>{
    res.clearCookie('cookieForever').send('cookieBorrado')
})

app.listen(8080)