const express = require('express')
const caixaController = require('./controllers/CaixaController')
const clienteController = require('./controllers/ClienteController')
const empresaController = require('./controllers/EmpresaController')
const estoqueController = require('./controllers/EstoqueController')
const fornecedorController = require('./controllers/FornecedorController')

const router = express.Router()

router.post('/cliente', clienteController.create)
router.get('/cliente', clienteController.index)
router.patch('/cliente/:id', clienteController.update)
router.delete('/cliente/:id', clienteController.delete)

router.post('/empresa', empresaController.create)
router.get('/empresa', empresaController.index)
router.patch('/empresa/:id', empresaController.update)
router.delete('/empresa/:id', empresaController.delete)

router.post('/caixa', caixaController.create)
router.get('/caixa', caixaController.index)

router.post('/estoque', estoqueController.create)
router.get('/estoque', estoqueController.index)

router.post('/fornecedor', fornecedorController.create)
router.get('/fornecedor', fornecedorController.index)

module.exports = router