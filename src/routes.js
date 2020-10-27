const express = require('express')
const CaixaController = require('./controllers/CaixaController')
const ClienteController = require('./controllers/ClienteController')
const EmpresaController = require('./controllers/EmpresaController')
const EstoqueController = require('./controllers/EstoqueController')
const FornecedorController = require('./controllers/FornecedorController')

const router = express.Router()
const clienteController = new ClienteController
const empresaController = new EmpresaController
const caixaController = new CaixaController
const estoqueController = new EstoqueController
const fornecedorController = new FornecedorController

router.post('/cliente', clienteController.create)
router.get('/cliente', clienteController.read)
router.patch('/cliente/:id', clienteController.update)
router.delete('/cliente/:id', clienteController.delete)

router.post('/empresa', empresaController.create)
router.get('/empresa', empresaController.read)
router.patch('/empresa/:id', empresaController.update)
router.delete('/empresa/:id', empresaController.delete)

router.post('/caixa', caixaController.create)
router.get('/caixa', caixaController.read)

router.post('/estoque', estoqueController.create)
router.get('/estoque', estoqueController.read)

router.post('/fornecedor', fornecedorController.create)
router.get('/fornecedor', fornecedorController.read)

module.exports = router