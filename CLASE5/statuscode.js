//siempre poner estos archivos en src

import express from 'express'
const app = express ()

app.get('/', (req,res)=>{
 res.status(404).send('my response')
    
})


app.listen(8080)