const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/page2', (req, res) => {
    res.render('page2')
})

app.get('/page3', (req, res) => {
    res.render('page3')
})

app.get('/page4', (req, res) => {
    res.render('page4')
})

app.get('/page5', (req, res) => {
    res.render('page5')
})

app.get('/page6', (req, res) => {
    res.render('page6')
})

app.get('/page7', (req, res) => {
    res.render('page7')
})

app.get('/page8', (req, res) => {
    res.render('page8')
})

app.get('/page9', (req, res) => {
    res.render('page9')
})

app.get('/page10', (req, res) => {
    res.render('page10')
})

app.get('/page11', (req, res) => {
    res.render('page11')
})

app.get('/page12', (req, res) => {
    res.render('page12')
})

app.get('/page13', (req, res) => {
    res.render('page13')
})


app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found.'
    })
})

app.listen(port , () => {
    console.log('Server is up on port ' + port)
})