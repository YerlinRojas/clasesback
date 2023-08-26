import express from 'express'
const app = express ()

const users = [
    {gender:'male', id:1, name:'nombre1'},
    {gender:'female',id:2, name:'nombre2'},
    {gender:'male',id:3, name:'nombre3'},
    {gender:'female',id:4, name:'nombre4'}

]

app.get('/', (req,res)=>{
    let gendersend =req.query.gender

    if(gendersend){
        gendersend = gendersend.toLowerCase()
        const userFilter= users.filter(u=> u.gender === gendersend)
        return res.send (userFilter)
    }
    
    res.send(users)
})
app.get('/:id', (req,res)=>{
    const id= parseInt(req.params.id)

    const user = users.find(u=> u.id===id)
    if(!user) res.send({error:'user not found' })
    else res.send(user)
})

//pasarle egender por htpp

app.listen(8080)
