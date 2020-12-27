//Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadeplhia'
}

console.log(user)


const product = {
    label: 'Red noteboot',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}



// const {label: productLabel, stock, rating= 5} = product
// console.log(productLabel)
// console.log(rating)



const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)