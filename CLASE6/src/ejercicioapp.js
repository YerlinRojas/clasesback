import express from  'express'
import multer from 'multer'
const app = express()
app.use(express.static('./src/public'))
app.use(express.json())

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './src/public/thumbnail')
    },
    filename : function(req, file, cb){
        cb(null, new Date().getTime()+ file.originalname)
    }

})
const loader= multer({storage})

app.post('/',loader.single('file'), (req,res)=>{
    if(!req.file){
        return res.status(400).send({status:'error', error :'no file'}) }
        console.log(req.file)
        res.send('file uploand')
})

app.listen(8080)

//modo de recuperar esto cambiar app por el nombre del js ejercicioapp.js