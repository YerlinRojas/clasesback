import { Router } from 'express'
const router = Router()

const users = [
    {name:'uno', lastname: 'dos'},
    {name:'kk', lastname: 'dgg'},
    {name:'ee', lastname: 'dks'}
]

router.get('/',(req,res)=>{

    const number = Math.floor(Math.random()*4)
    res.render('users',{
        user: users[number]
    })
})
export default router