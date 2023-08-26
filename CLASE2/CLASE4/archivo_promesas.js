//Las promesas viniero a mejorar los callbak hells

const fs = require ('fs')
const filename = 'ejemploPromises.txt'

//se genera la promesa con async()

const funcionAsync = async () => {
    try {
        //await se utiliza para que resuelva la rpomesa y y luego ejecute lo que queda despuyes de la promesa. de lo contrario
        //queda en <pending>// ludego acompañado por promises

        await fs.promises.writeFile (filename, 'Saludos desde promesa')
        //luego de creado el archivo se ejecutan los demas modulos a traves de variables

        let leer = await fs.promises.readFile(filename,'utf-8' )
        console.log("CONTENIDO:" , leer)

    } catch (error) {
        console.log ("error", error)
    }
}

// de ultimo llamamos a la funcion

funcionAsync()
console.log("fin")
//NOTA: reject y resolve se utiliza cuando creamos la promesa
//en este caso el fs.promise ya ejecuta el reject y resolve 


