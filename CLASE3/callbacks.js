const originales = [1,2,3,4]

const fuctionForMap = (x) => {
    return x + 1
}

const newValue = originales.map(fuctionForMap)
console.log(newValue)

const newValue2= originales.map((x)=>{
    return x*2
})
console.log(newValue2)

