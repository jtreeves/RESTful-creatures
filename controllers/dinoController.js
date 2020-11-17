const dinoRouter = require('express').Router()

dinoRouter.get('/', (req, res) => {
    res.send('hello from the dinos index')
})

module.exports = dinoRouter