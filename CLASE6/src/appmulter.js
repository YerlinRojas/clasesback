//npm install multer
//REVISAR ESTE CODIGO NO FUNCIONA!!!!!!!13:18HRS
//despues hace un EJEMPLO DE SUBIR ARCHIVOS POR HTML
import express from  'express'
import multer from 'multer'
const app = express()
app.use(express.json())

//multer trabaja sincrotico
//configura multer
const storage= multer.diskStorage({
    //1
    destination:function(req,file,cb){
        //ubicacion delñ archivo
        //1parametro como sale el elemento sin ningun error null
        //2donde se guarda
        cb(null, './public/')
    },
    //nombre del archuvbo
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})
//middleware para cargar archivo
const uploader= multer({storage})
app.post('/', uploader.single('file'), (req,res)=>{
    if(!req.file){
        return res.status(400).send({status:'error', error :'no file'}) }
        console.log(req.file)
        res.send('file uploand')
    })


app.listen(8080)