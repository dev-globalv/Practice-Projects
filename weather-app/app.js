const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

// const url = 'http://api.weatherstack.com/current?access_key=d09b682962e042bfb024c3250b49cfbf&query=37.8267,-122.4233&units=f'



geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


forecast(37.8267,-122.4233, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})



