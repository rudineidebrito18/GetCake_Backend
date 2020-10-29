const express = require('express')
const caixaController = require('./controllers/CaixaController')
const clienteController = require('./controllers/ClienteController')
const empresaController = require('./controllers/EmpresaController')
const estoqueController = require('./controllers/EstoqueController')
const fornecedorController = require('./controllers/FornecedorController')
const telefoneController = require('./controllers/TelefoneController')

const router = express.Router()

router.post('/cliente', clienteController.create)
router.get('/cliente', clienteController.index)
router.put('/cliente/:id', clienteController.update)
router.delete('/cliente/:id', clienteController.delete)

router.post('/empresa', empresaController.create)
router.get('/empresa', empresaController.index)
router.put('/empresa/:id', empresaController.update)
router.delete('/empresa/:id', empresaController.delete)

router.post('/caixa', caixaController.create)
router.get('/caixa', caixaController.index)

router.post('/estoque', estoqueController.create)
router.get('/estoque', estoqueController.index)

router.post('/fornecedor', fornecedorController.create)
router.get('/fornecedor', fornecedorController.index)

router.post('/telefone', telefoneController.create)
router.get('/telefone/:id', telefoneController.index)
router.put('/telefone/:id', telefoneController.update)
router.delete('/telefone/:id', telefoneController.delete)

module.exports = router