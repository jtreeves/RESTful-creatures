const fs = require('fs')
const dinoRouter = require('express').Router()

dinoRouter.get('/', (req, res) => {
    const rawDinos = fs.readFileSync('./dinosaurs.json')
    const dinos = JSON.parse(rawDinos)
    res.render('dinosaurs/index', { dinos })
})

// NEW must go above SHOW
dinoRouter.get('/new', (req, res) => {
    res.render('dinosaurs/new')
})

dinoRouter.get('/:id', (req, res) => {
    const rawDinos = fs.readFileSync('./dinosaurs.json')
    const dinos = JSON.parse(rawDinos)
    const id = parseInt(req.params.id) - 1
    const dino = dinos[id]
    res.render('dinosaurs/show', { dino })
})

dinoRouter.post('/', (req, res) => {
    const newDino = req.body
    const rawDinos = fs.readFileSync('./dinosaurs.json')
    const dinos = JSON.parse(rawDinos)
    dinos.push(newDino)
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos))
    res.redirect('/dinosaurs')
})

dinoRouter.get('/search/:query', (req, res) => {
    const newDino = req.body
    const rawDinos = fs.readFileSync('./dinosaurs.json')
    const dinos = JSON.parse(rawDinos)
    const query = req.params.query
    const filterDinos = dinos.filter((dino) => dino.name === query)
    res.render('dinosaurs/search', { dinos: filterDinos})
})

dinoRouter.get('/edit/:id', (req, res) => {
    const rawDinos = fs.readFileSync('./dinosaurs.json')
    const dinos = JSON.parse(rawDinos)
    res.render('dinosaurs/edit', { dino: dinos[req.params.id], dinoId: req.params.id })
})

dinoRouter.delete('/:id', (req, res) => {
    const rawDinos = fs.readFileSync('./dinosaurs.json')
    const dinos = JSON.parse(rawDinos)
    dinos.splice(req.params.id, 1)
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos))
    res.redirect('/dinosaurs')
})

dinoRouter.put('/:id', (req, res) => {
    const rawDinos = fs.readFileSync('./dinosaurs.json')
    const dinos = JSON.parse(rawDinos)
    // Reassign name and type of dinosaur fields being edited
    const dinoObject = dinos[req.params.id]
    dinoObject.name = req.body.name
    dinoObject.type = req.body.type
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos))
    res.redirect('/dinosaurs')
})

module.exports = dinoRouter