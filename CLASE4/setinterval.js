const temporizador = () => {
    console.log("iniciamos el temporizador")
    let counter = 0
    const timer = setInterval(()=>{
        console.log(++counter)
        if(counter> 5) clearInterval(timer)
    },2000)
}

console.log("tiktok")
temporizador()
console.log("fin")

//++ antes actucaliza la variable
//++ despues incrmenta la variable 
