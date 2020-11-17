// Require Modules
const app = require('express')()

// Create Routes
app.get('/', (req, res) => {
    res.send('hello, I am alive!')
})

// Listen
app.listen(8000, () => {
    console.log('server started!')
})