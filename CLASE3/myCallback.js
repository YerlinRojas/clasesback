//callback 

//se crea una funcion a partir de un array y se puede utilizar en todas los arrays del codigo

Array.prototype.myMap2 = function (callback) {
    const newArray = [  ]

    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        const newElement = callback(element)
        newArray.push(newElement)
    }
    return newArray
}

const milista= [1,2,3,4]
const newLista = milista.myMap2(x => x*3)

console.log(newLista)