const express = require('express')
const ClienteController = require('./controllers/ClienteController')

const router = express.Router()
const clienteController = new ClienteController

router.get('/cliente', clienteController.index)
router.post('/cliente', clienteController.create)


module.exports = router