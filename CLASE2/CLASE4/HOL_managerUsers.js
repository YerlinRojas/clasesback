//crear un manager user
//Utilizamos ejemplo de crypto de node
//libreria nativas

//para las librerias las versiones se clasifican asi 2.3.4 (mayor version, Menor version, Path version)
//para instalar la Menor version mas alta: ^
//para actualizar el path :~

//para actualizar los paquetes : npm update

const fs = require ('fs')
const crypto = require('crypto')

//NOTA
//const name = "r2"
//const obj = {name}
//obj = {name:"r2"}

class ManagerUser {

        constructor (filename){
            //dentro del constructor van todos los this
            this.filename= filename
            this.format = 'utf-8'

        }

        createUser = async(name, lastname, age) =>{
            //add password para crypto
            const user = { name, lastname, age, password}

                user.salt= crypto.randomBytes(128).toString('base64')
                user.password= crypto.createHmac('sha256',user.salt).update(password).digest('hex')

            const list = await this.getUser ()
            list.push(user)

            await fs.promises.writeFile(this.filename, JSON.stringify(list))
        }

        getUser = async() => {
            try {
                 const data = await fs.promises.readFile(this.filename, this.format)
                 const dataObj = JSON.parse(data)
                 //sienmpre retornar el return cierra el try catch 
                 return dataObj
            } catch (error) {
                console.log('archivo no encontrado se creara uno')
                return []
            }
           
        }
}

async function run(){
    const manager = new ManagerUser ('users.jason')
    await manager.createUser("caro","prueba2", 23)
    console.log(await manager.getUser())
}

run()