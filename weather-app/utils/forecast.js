const request = require('postman-request')
const chalk = require('chalk')


const forecast = (lat , long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d09b682962e042bfb024c3250b49cfbf&query=' + lat + ',' +  long + '&units=f'

    request({ url: url, json: true}, (error, response) => {
        if (error){
            console.log(chalk.red.inverse('Unable to connect to weather service'), undefined)
        } else if (response.body.error) {
            console.log(chalk.red.inverse('Unable to find location'), undefined)
        } else {
            const temp = response.body.current.temperature
            const rain = response.body.current.precip
            const overcast = response.body.current.weather_descriptions[0]
            console.log(` ${overcast}, Its  fucking freezing out there, it is ${temp}F degreeeeZZZzzZz with ${rain}% chance of rain`)
        }
    })
}

module.exports = forecast