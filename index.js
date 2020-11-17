// Import Modules
const app = require('express')() // 3rd party imports (should go first in a block)

const dinoRouter = require('./controllers/dinoController') // Your imports (should go as a second block after the first one)

// Establish Routes
app.get('/', (req, res) => {
    res.send('hello, I am alive!')
})

app.use('/dinosaurs', dinoRouter)

// Listen
app.listen(8000, () => {
    console.log('server started!')
})