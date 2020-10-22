const express = require('express')
const ClienteController = require('./controllers/ClienteController')
const EmpresaController = require('./controllers/EmpresaController')

const router = express.Router()
const clienteController = new ClienteController
const empresaController = new EmpresaController

router.post('/cliente', clienteController.create)
router.get('/cliente', clienteController.read)
router.patch('/cliente/:id', clienteController.update)
router.delete('/cliente/:id', clienteController.delete)

router.post('/empresa', empresaController.create)
router.get('/empresa', empresaController.read)
router.patch('/empresa/:id', empresaController.update)
router.delete('/empresa/:id', empresaController.delete)

module.exports = router