const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')


const address = process.argv[2]

if (!address) {
    console.log('Please enter an address')
} else {
    geocode(address, (error, {latitude, longtitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(latitude, longtitude, (error, forecasData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecasData)
        })    
    })
    
}
