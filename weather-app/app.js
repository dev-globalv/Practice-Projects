const request = require('postman-request')
const chalk = require('chalk')

const url = 'http://api.weatherstack.com/current?access_key=d09b682962e042bfb024c3250b49cfbf&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    
    if (error) {
        console.log(chalk.red.inverse('Unable to connect to weather service'))
    } else if (response.body.error) {
        console.log(chalk.red.inverse('Unable to find location'))
    }  else {
        const temp = response.body.current.temperature
        const rain = response.body.current.precip
        const overcast = response.body.current.weather_descriptions[0]
        console.log(` ${overcast}, Its  fucking freezing out there, it is ${temp}F degreeeeZZZzzZz with ${rain}% chance of rain`)
    }
})


const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFza291Y2hhIiwiYSI6ImNrajMwYWhiYjB6emQycmxna3h5eWR6MWUifQ.O411EIpTXCb9VfPdwhucsw&limit=1'

request({ url: url2, json: true }, (error, response) => {
    if (error) {
        console.log(chalk.red.inverse('Unable to connect to weather service'))
    } else if (response.body.features.length === 0) {
        console.log(chalk.red.inverse('Unable to find location, try again'))
    } else {
        const long = response.body.features[0].center[0]
        const lat = response.body.features[0].center[1]
        console.log(`Latitude is: ${lat}`)
        console.log(`Longtitude is: ${long}`)
    }

   
})

// Geocoding
// Addres --> Lat/Long --> weather