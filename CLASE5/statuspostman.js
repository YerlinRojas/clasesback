import express from 'express'
const app = express ()
//siempre poner esto
//el body represnta la info que el cliente envia req.body
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
//para post => body => raw=> json 
//lueo escribir el objeto del producto o usuario y eso lo traemos con get
//los usuarios se agregan en el postman con el POST, luego con el GEt traemons la lista de usuarios

//ACTUALIZAR CON PUT 
//en POSTMAN put=>raw=>json
//en la RUTA poner id debido que va a capturar el que se va a actualizar
app.put('/api/user/:id', (req,res)=>{
    //1 buscamos el id por params en postman
    const id = parseInt (req.params.id)

    //5 traemos el usuario del body para actualizarlo
    const user = req.body

    //2buscar en el array el usuario 
    const useridx= users.findIndex(u=> u.id === id)

    //3validacion
    if(useridx < 0){
        //404 not found 
        return res.status(404).json({status:'error', message:'user not found' })
    }
        //4actualizamos el user
        users[useridx] = user

    //6mandar estatus     
    res.json({satus:'succes', message:'actualizando' })
})


//DELETE
app.delete('/api/user/:id', (req,res)=>{
    //buscar primero el usuario
    //usando filter
    const id = parseInt(req.params.id)

    const useridx= users.findIndex(u=> u.id === id)
    if(useridx < 0){
        return res.status(404).json({status:'error', message:'user not found' })
    }

    users = users.filter (u => u.id !== id)
    res.json({satus:'succes', message:'user delete' })
})




   //get api/perritos
   //get/api/perritos/:pid
   //ya con get se obtine .no, se tiene que poner get/perritos/obtener/:pib
   //esto con todos los metos put get delete post

   //post: crea produtcs, usuarios, enviar info al email,crea carrito de compra

app.listen(8080)
