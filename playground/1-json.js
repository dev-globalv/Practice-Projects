const fs = require('fs')

const buffer =  fs.readFileSync('1-json.json') 
const dataJSON = buffer.toString()
const personObject = JSON.parse(dataJSON)

personObject.name = "Billaros"
personObject.age = 33

const userJSON = JSON.stringify(personObject)
fs.writeFileSync('1-json.json', userJSON)