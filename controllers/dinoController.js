const dinoRouter = require('express').Router()
const fs = require('fs')

dinoRouter.get('/', (req, res) => {
    const rawDinos = fs.readFileSync('./dinosaurs.json')
    const dinos = JSON.parse(rawDinos)
    res.render('dinosaurs/index', { dinos })
})

module.exports = dinoRouter