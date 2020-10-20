const express = require('express')
const ClienteController = require('./controllers/ClienteController')

const router = express.Router()
const clienteController = new ClienteController

router.post('/cliente', clienteController.create)
router.get('/cliente', clienteController.read)
router.patch('/cliente/:id', clienteController.update)
router.delete('/cliente/:id', clienteController.delete)


module.exports = router