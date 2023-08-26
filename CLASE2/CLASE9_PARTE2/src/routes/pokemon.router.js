import { Router } from "express";
const router = Router()

//listar poke
router.get('/', async(req,res)=> {
    res.render('list',{})
})
//pag crear poke (render HTML )

//crear poke

//obtener un poke (name)


//borrar poke

export default router