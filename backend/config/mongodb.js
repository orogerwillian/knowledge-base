const mongoose = require('mongoose')
const { mongodbUrl } = require('../.env')

mongoose.connect(mongodbUrl, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })
    .finally(_ => console.log('Conectado no MongoDB!'))