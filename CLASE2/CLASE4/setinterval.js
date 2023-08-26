//setINTERVAL

const temporizador = () => {
    console.log("iniciamos el temporizador")
    let counter = 0
    const timer = setInterval(()=>{
        console.log(++counter)
        //aqui se limpia el siclo infinito con el clearInterval 
        if(counter> 5) clearInterval(timer)
    },2000)
}

console.log("tiktok")
temporizador()
console.log("fin")

//++ antes actucaliza la variable
//++ despues incrmenta la variable 

//a = 1
//b = ++a
//b = 2
//a = 2

//c = a++
//c = 2
//a = 3

