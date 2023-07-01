import express from 'express'
const app = express ()
//siempre poner esto la siguiente linea de codigo
app.use(express.json())

const users =[]

app.get('/api/user', (req,res)=>{
res.json(users)
})

app.post('/api/user', (req,res)=>{
    const user =req.body
    users.push(user)
    res.status(201).json({satus:'succes', message:'se agrego' })
})
//los usuarios se agregan en el postman con el POST, luego con el GEt traemons la lista de usuarios
app.put('/api/user', (req,res)=>{
    const id =req.params.id
    const user = req.body
    const useridx= users.findIndex(u=> u.id === id)
    if(useridx < 0){
        return res.status(404).json({status:'error', message:'user not found' })
    }

        users[useridx] = user
    res.json({satus:'succes', message:'actualizando' })
})



//-------ver luego me quede




   //get api/perritos
   //get/api/perritos/:pid
   //ya con get se obtine .no, se tiene que poner get/perritos/obtener/:pib
   //esto con todos los metos put get delete post

   //post: crea produtcs, usuarios, enviar info al email,crea carrito de compra

app.listen(8080)
