// Import Modules
// 3rd party imports (should go first in a block)
const express = require('express')
const app = express()
const layouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

// Your imports (should go as a second block after the first one)
const dinoRouter = require('./controllers/dinoController')
const cryptoRouter = require('./controllers/cryptoController') 

// Set Up
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(layouts)
app.use(methodOverride('_method'))

// Establish Routes
app.get('/', (req, res) => {
    res.send('hello, I am alive!')
})

app.use('/dinosaurs', dinoRouter)
app.use('/cryptids', cryptoRouter)

// Listen
app.listen(8000, () => {
    console.log('server started!')
})