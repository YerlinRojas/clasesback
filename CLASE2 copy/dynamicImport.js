import Calculadora from "./lib"

const modo = 'calculos'

async function exampleImport () {
//Importa libreria si la condicion es true
 if (modo == 'calculos') {
    const {default: Calculadora } = await import ('./lib.js')
    let calc = new Calculadora ()
    console.log (calc.sumar(4,5))
 }

}
exampleImport()
