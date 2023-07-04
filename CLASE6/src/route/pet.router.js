import { Router } from 'express'
const router = Router()
const pets = []
//middleware a nivel de router este es el 3 orden en que se ejecuta
router.use((req,res,next)=>{
    console.log("esto es mascotas")
    next()
})
//--------

router.get('/',(req, res) =>{
    res.send({pets})
})

router.post('/', (req,res)=>{
    const user= req.body
    users.push(pet)
    res.send({status: 'success'})
})
export default router