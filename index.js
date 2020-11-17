// Import Modules
const app = require('express')()
const layouts = require('express-ejs-layouts') // 3rd party imports (should go first in a block)

const dinoRouter = require('./controllers/dinoController') // Your imports (should go as a second block after the first one)

// Set Up as EJS
app.set('view engine', 'ejs')

// Establish Routes
app.get('/', (req, res) => {
    res.send('hello, I am alive!')
})

app.use(layouts)
app.use('/dinosaurs', dinoRouter)

// Listen
app.listen(8000, () => {
    console.log('server started!')
})