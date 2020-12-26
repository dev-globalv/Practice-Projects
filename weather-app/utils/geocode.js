const request = require('postman-request')
const chalk = require('chalk')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address)  + '.json?access_token=pk.eyJ1IjoidmFza291Y2hhIiwiYSI6ImNrajMwYWhiYjB6emQycmxna3h5eWR6MWUifQ.O411EIpTXCb9VfPdwhucsw&limit=1'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to fined location. Try another location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longtitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode