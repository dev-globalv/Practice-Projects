const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Andrew Mead',
        title: 'About me'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help Page',
        context: 'lorem25',
        name: 'Andrea Mead'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Philadelphia',
        forecast: '50 deg'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error - 404',
        name: 'Andrew Mead',
        errorMsg: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error - 404',
        name: 'Andrew Mead',
        errorMsg: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server Up')
})