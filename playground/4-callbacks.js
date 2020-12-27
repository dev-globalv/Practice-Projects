setTimeout(() => {
    console.log('2 sec Are up')
}, 2000);


const names =['Andrea','Jen','Jes']
const shortNames = names.filter((name) => {
    return name.length <= 4
})


const geocode = (adress, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0
        }
    
        callback(data)
    }, 2000);
}

geocode('Phidelphia',(data)=>{
    console.log(data)
})

const add = (num1, num2, sum) => {
    setTimeout(() => {
        const add = num1 + num2
        sum(add)
    }, 2000);
    
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})