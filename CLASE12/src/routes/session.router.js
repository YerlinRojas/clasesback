import UserModel from '../model/user.model.js'
import { Router } from 'express'
import { createHash, isValidPassword } from "../utils.js";
import passport from 'passport';


const router = Router()


router.get('/', (req, res) => { res.render('home', {}) })

// URL para render
router.get('/login', (req, res) => { res.render('login', {}) })
router.get('/register', (req, res) => { res.render('register', {}) })


// Iniciar Session
router.post('/login', passport.authenticate('login', '/login'), async (req, res) => {

    if (!req.user) return res.status(400).send('Invalid Credentials')
    req.session.user = req.user

    return res.redirect('/profile')
})


// Registro
router.post(
    '/register',
    passport.authenticate('register', { failureRedirect: '/register', }),
    async (req, res) => {
        res.redirect('/login')
    }
)

// Profile
function auth(req, res, next) {
    if (req.session?.user) next()
    else res.redirect('/login')
}
router.get('/profile', auth, (req, res) => {
    const user = req.session.user

    res.render('profile', user)
})


//GITHUB
router.get('/login-github',
passport.authenticate('github', {scope:['user:email']})
, async(req,res)=>{})

router.get(
    '/githubcallback',
    passport.authenticate('github', {failureRedirect: '/'}),
    async(req,res)=>{

    }
)


//ESTO ES PARA EL LOCAL CON AUTORIZACION SIN PASSPORT
/* router.get('/', (req, res) => {res.send('OK')})

// URL para render
router.get('/login', (req, res) => { res.render('login', {}) })
router.get('/register', (req, res) => { res.render('register', {}) })

// Iniciar Session
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    
    // 1) Buscamos por email
    const user = await UserModel.findOne({ email })
    if(!user) {
        console.log('No se enmcontro el user')
        return res.redirect('/login')
    }

    // 2) Validamos el password
    if(!isValidPassword(user, password)) { // Validamos el hash
        console.log('Password not valid')
        return res.redirect('/login')
    }

    req.session.user = user
    return res.redirect('/profile')
})
// Registro
router.post('/register', async (req, res) => {
    const data = req.body
    data.password = createHash(data.password) // Hasheamos !!!

    const result = await UserModel.create(data)
    console.log(result)

    res.redirect('/login')
})

// Profile
function auth(req, res, next) {
    if(req.session?.user) next()
    else res.redirect('/login')
}
router.get('/profile', auth, (req, res) => {
    const user = req.session.user 

    res.render('profile', user)
}) */


export default router