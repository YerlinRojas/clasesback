const obj = {
    field1 : "romi",
    field2: 55,
    field3 : true,
}

const obj2 = {
    field4:"agus",
    field5 : "santi",
    field6 : [1,23,4]
}

//SPREAD OPERATOR
const { field1,field2} = obj
console.log({field1,field2})

//PARA unir todos los objetos en uno solo con el spread
const obj3 = {...obj, ...obj2}
console.log(" este es el objeto con todos adentro" ,obj3)

//REST OPERATOR es para sacar el resto del obj dejar uno o mas afuera
const obj4 = {
    field7 : "zazha",
    field8 : true
}

const {field7, ...rest} = obj4
console.log("Esto es el obj restante", rest)

