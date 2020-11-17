const fs = require('fs')
const cryptoRouter = require('express').Router()

cryptoRouter.get('/', (req, res) => {
    const rawCryptos = fs.readFileSync('./cryptids.json')
    const cryptos = JSON.parse(rawCryptos)
    res.render('cryptids/index', { cryptos })
})

// NEW must go above SHOW
cryptoRouter.get('/new', (req, res) => {
    res.render('cryptids/new')
})

cryptoRouter.get('/:id', (req, res) => {
    const rawCryptos = fs.readFileSync('./cryptids.json')
    const cryptos = JSON.parse(rawCryptos)
    const id = parseInt(req.params.id) - 1
    const crypto = cryptos[id]
    const image = crypto.img_url
    res.render('cryptids/show', { crypto, image })
})

cryptoRouter.post('/', (req, res) => {
    const newCrypto = req.body
    const rawCryptos = fs.readFileSync('./cryptids.json')
    const cryptos = JSON.parse(rawCryptos)
    cryptos.push(newCrypto)
    fs.writeFileSync('./cryptids.json', JSON.stringify(cryptos))
    res.redirect('/cryptids')
})

module.exports = cryptoRouter